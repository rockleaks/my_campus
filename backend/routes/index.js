const express = require('express');
const { studentRouter } = require("./student");
const auth = require('../middleware/auth');
const router = express.Router();

router.use("/auth", auth)
router.use("/student", studentRouter);

module.exports = router;