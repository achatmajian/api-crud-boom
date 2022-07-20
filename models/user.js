const mongoose = require('mongoose');

// Define User Schema

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    }    
});

module.exports = { User }