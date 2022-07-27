const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define Post Schema

const postSchema = Schema({
    title: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post }