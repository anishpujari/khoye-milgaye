import { User } from "../models/User.js";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);


        let newUser = await User.create({
            name, 
            email, 
            password: hashedPassword, 
        });
        await newUser.save()

        res.status(201).json({ message: 'User registered successfully' ,user:newUser ,success: true,});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
   
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id , isAdmin: user.isAdmin}, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({ token, userId: user._id, isAdmin: user.isAdmin  ,user, success: true,});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};