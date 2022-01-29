const resumeProfileController = require('../controllers/resume-profile.js');

const express = require('express');
const router = express.Router();

router.use('/submit-info', resumeProfileController.createResume);

module.exports = router;