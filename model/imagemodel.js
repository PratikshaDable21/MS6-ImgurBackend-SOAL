const mongoose = require('mongoose');


const imguploadschema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('image', imguploadschema);