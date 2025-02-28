const express = require('express');
const router = express.Router();
const medicalReportController = require('../controllers/medicalReport.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/upload', authMiddleware.authUser, medicalReportController.uploadReport);
router.get('/progress', authMiddleware.authUser, medicalReportController.getProgressReport);
router.get('/progress/:patientId', authMiddleware.authDoctor, medicalReportController.getProgressReportByPatientId);

module.exports = router;