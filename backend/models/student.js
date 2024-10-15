const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    rollNumber: {type: Number, required: false},
    regNumber: {type: String, required: true},
    class: {type: String, required: false},
    image: {type: String, required: false},    
})

const studentModel = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = studentModel