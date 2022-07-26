const express = require('express');
const router = express.Router();

// ---------- User Routing ---------- //

const { User } = require('../models/user');

// Get All Users
router.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
            res.status(200).json({ code: 200, message: 'Users Retrieved Successfully', getAllUsers: data})
        } else {
            res.status(400).json({ code: 400, message: 'Users Failed to Retrieve, See Console'});
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
        if(!err) {
            res.status(200).json({ code: 200, message: 'User Added Successfully', addUser: data})
        } else {
            res.status(400).json({ code: 400, message: 'User Failed to Create, See Console'});
            console.log(err);
        }
    });
});

// Get Single User
router.get('/api/user/:id', (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
            res.status(200).json({ code: 200, message: 'User Retrieved Successfully', getSingleUser: data})
        } else {
            res.status(400).json({ code: 400, message: 'User Failed to Retrieve, See Console'});
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
    User.findByIdAndUpdate(req.params.id, { $set: userInfo }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'User Updated Successfully', updateUser: data })
        } else {
            res.status(400).json({ code: 400, message: 'User Failed to Update, See Console'});
            console.log(err);
        }
    });
});

// Delete User
router.delete('/api/user/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'User Deleted Successfully', deleteUser: data})
        } else {
            res.status(400).json({ code: 400, message: 'User Failed to Delete, See Console'});
            console.log(err);
        }
    });
})


// ---------- Post Routing ---------- //

const { Post } = require('../models/post');

// Get All Posts
router.get('/api/posts', (req, res) => {
    Post.find({}, (err, data) => {
        if(!err) {
            res.send(data);
            res.status(200).json({ code: 200, message: 'Posts Retrieved Successfully', getAllPosts: data})
        } else {
            res.status(400).json({ code: 400, message: 'Posts Failed to Retrieve, See Console'});
            console.log(err);
        }
    });
});

// Create New Post
router.post('/api/post/create', (req, res) => {
    const postInfo = new Post({
        title: req.body.title,
        postContent: req.body.postContent,
    });
    postInfo.save((err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'Post Created Successfully', createPost: data});
        } else {
            res.status(400).json({ code: 400, message: 'Post Failed to Create, See Console'});
            console.log(err);
        }
    });
});

// Get Single Post
router.get('/api/post/:id', (req, res) => {
    Post.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
            res.status(200).json({ code: 200, message: 'Post Retrieved Successfully', getSinglePost: data})
        } else {
            res.status(400).json({ code: 400, message: 'Post Failed to Retrieve, See Console'});
            console.log(err);
        }
    });
});

// Update Post
router.put('/api/post/edit/:id', (req, res) => {
    const postInfo = {
        title: req.body.title,
        postContent: req.body.postContent,
        dateCreated: req.body.dateCreated
    };
    Post.findByIdAndUpdate(req.params.id, { $set: postInfo }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'Post Updated Successfully', updatePost: data })
        } else {
            res.status(400).json({ code: 400, message: 'Post Failed to Update, See Console'});
            console.log(err);
        }
    });
});

// Delete Post
router.delete('/api/post/delete/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'Post Deleted Successfully', deletePost: data})
        } else {
            res.status(400).json({ code: 400, message: 'Post Failed to Delete, See Console'});
            console.log(err);
        }
    });
})
module.exports = router;