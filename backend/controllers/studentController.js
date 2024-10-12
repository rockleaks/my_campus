const studentModel = require("../models/student");
const fs = require("fs");
const studentService = require("../services/studentServices");

const StudentService = new studentService();

const addStudent = async (req, res) => {
    
}

const getStudent = async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await StudentService.getStudentDetails(studentId);
        res.status(200).json({student});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addStudent, getStudent };