const mongoose = require('mongoose');

let CategorySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "The name is required"]
    }
});

module.exports = mongoose.model('Category', CategorySchema);