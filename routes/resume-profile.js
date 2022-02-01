const resumeProfileController = require('../controllers/resume-profile.js');

const express = require('express');
const router = express.Router();

router.post('/submit-info', resumeProfileController.createResume);
router.get('/get-talent-info', resumeProfileController.getTalentData);

module.exports = router;