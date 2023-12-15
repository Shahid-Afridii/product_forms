import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        sparse: true // Allows for null values
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['developer', 'designer', 'manager', 'other']
    }
}, { timestamps: true });





// Check if the model already exists before creating it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
