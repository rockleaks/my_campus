const express = require('express');
const { createStudentController, getStudentDetailsController } = require('../controllers/studentController');
const multer = require('multer');

const studentRouter = express.Router();

studentRouter.get('/:id', getStudentDetailsController);
studentRouter.post('/create', createStudentController);
module.exports = { studentRouter }