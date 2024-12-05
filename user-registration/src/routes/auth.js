const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/db');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    // Kiểm tra tính hợp lệ
    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).send('Invalid email format');
    }
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }
    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
        return res.status(400).send('Password must be at least 6 characters long, contain at least 1 number and 1 special character');
    }

    try {
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu vào database
        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.send('User registered successfully');
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

module.exports = router;
