const express = require('express');
const router = express.Router();

const { User } = require('../models/user');

// Get All Users
router.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Add New User
router.post('/api/user/add', (req, res) => {
    const userInfo = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        team: req.body.team
    });
    userInfo.save((err, data) => {
        res.status(200).json({ code: 200, message: 'User Added Successfully', addUser: data})
    });
});

// Get Single User
router.get('/api/user/:id', (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Update User
router.put('/api/user/edit/:id', (req, res) => {
    const userInfo = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        team: req.body.team
    };
    User.findByIdAndUpdate(req.params.id, { $set: userInfo }, { new: true}, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'User Updated Successfully', updateUser: data })
        } else {
            console.log(err);
        }
    });
});

// Delete User
router.delete('/api/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'User Deleted Successfully', deleteUser: data})
        }
    });
})

module.exports = router;