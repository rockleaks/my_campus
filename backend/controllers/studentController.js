const studentModel = require("../models/student");
const fs = require("fs");
const studentService = require("../services/studentServices");

const StudentService = new studentService();


const createStudentController = async (req, res) => {
    try {
      const studentData = req.body;
      // Basic validation
      if (!studentData) {
        throw new Error("Incomplete details");
      }
      const student = await StudentService.createStudent(studentData); // Create student using studentService
  
      return res.status(200).json({
        data: student,
        success: true,
        message: "student created successfully",
        err: {},
      });
    } catch (error) {
      console.error("Error creating student:", error);
      return res.status(500).json({
        data: null,
        success: false,
        message: "An error occurred while creating the student",
        err: error.message,
      });
    }
  };
const getStudentDetailsController = async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await StudentService.getStudentDetails(studentId);
        res.status(200).json({student});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createStudentController, getStudentDetailsController };