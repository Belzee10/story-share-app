const mongoose = require('mongoose');

let StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    header_img: {
        type: String
    },
    content: {
        type: String,
        required: [true, 'You must write something']
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'You must select a category']
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Who is this story?']
    },
    comments: [{
        text: {
            type: String,
            required: [true, 'You must write something']
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]   
});

module.exports = mongoose.model('Story', StorySchema);