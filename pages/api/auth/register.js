import dbConnect from '../../../utils/db.js';
import User from '../../../modals/user';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const { username, email, phone, password, role } = req.body;
            const existingUser = await User.findOne({ email: email.toLowerCase() });

            if (existingUser) {
                return res.status(400).json({ success: false, message: 'Email already in use' });
            }

            console.log("Received Registration Request:");
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("Role:", role);

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            console.log("Hashed Password:", hashedPassword);

            const user = new User({ username, email: email.toLowerCase(), phone, password: hashedPassword, role });
            await user.save();
            res.status(201).json({ success: true, message: 'User registered successfully' });
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
