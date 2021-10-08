const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    imageName: {
        type: String,
        required: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    rating: {
        type: Int32Array,
        'default':1,
        min: 1,
        max: 5
    },
    type: {
        type: String, 
        required: true,
        minlength: 3
    }
});

mongoose.model('Food', foodSchema);