const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define User Schema

const userSchema = Schema({
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

const User = mongoose.model('User', userSchema);

module.exports = { User }