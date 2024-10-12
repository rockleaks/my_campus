const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    regno: {type: String, required: true},
    class: {type: String, required: true},
    image: {type: String, required: true},    
})

const studentModel = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = studentModel