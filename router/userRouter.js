const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');




router.post('/add', async (req, res) => {
    try {
        const newUser = await new UserModel(req.body).save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Failed to add user' });
    }
});

router.get('/getall', async (req, res) => {
    try {
        const allUsers = await UserModel.find({});
        res.json(allUsers);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

router.get('/getbyemail/:email', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.params.email });
        res.json(user);
    } catch (error) {
        console.error('Error fetching user by email:', error);
        res.status(500).json({ error: 'Failed to fetch user by email' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email, password });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ error: 'Login failed' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Failed to authenticate user' });
    }
});

module.exports = router;
