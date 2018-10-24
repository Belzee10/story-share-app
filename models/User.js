const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    colorTheme: {
        type: String,
        default: '#464646'
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        min: [3, 'Please 3 or more characters'],
        required: [true, 'The password is required']
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        required: [true, 'The role is required']
    },
    notifications: [{
        text: String,
        hasSeen: {
            type: Boolean,
            default: false
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]  
});

module.exports = mongoose.model('User', UserSchema);