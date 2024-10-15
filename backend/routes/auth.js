const express = require('express');
const auth = require('../middleware/auth');
const studentModel = require('../models/student');

const authRouter = express.Router();
authRouter.get("/", auth, async (req, res) => {
    const user = await studentModel.findById(req.user);
    res.json({ ...user._doc, token: req.token });
});