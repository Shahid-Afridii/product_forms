import dbConnect from '../../../utils/db.js';
import User from '../../../modals/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email: email.toLowerCase() });

            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            console.log("userPassword", user.password)
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ success: false, message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Select the user details to send back
            const userDetails = {
                name: user.username, // assuming the user has a name field
                email: user.email,
                phone:user.phone,
                Role:user.role,
                // include other fields you might need
            };

            res.status(200).json({ success: true, token, userDetails });
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
