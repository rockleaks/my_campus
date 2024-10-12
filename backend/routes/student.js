const express = require('express');
const { addStudent, getStudent } = require('../controllers/studentController');
const multer = require('multer');

const studentRouter = express.Router();

studentRouter.get('/:id', getStudent);
module.exports = { studentRouter }