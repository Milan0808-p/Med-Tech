const MedicalReport = require('../models/medicalReport.model');

module.exports.uploadReport = async (req, res, next) => {
    try {
        const { report } = req.body;
        const userId = req.user._id;

        const medicalReport = new MedicalReport({
            userId,
            report
        });

        await medicalReport.save();
        res.status(201).json(medicalReport);
    } catch (error) {
        next(error);
    }
};

module.exports.getProgressReport = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const reports = await MedicalReport.find({ userId });

        res.status(200).json(reports);
    } catch (error) {
        next(error);
    }
};

module.exports.getProgressReportByPatientId = async (req, res, next) => {
    try {
        const { patientId } = req.params;
        const reports = await MedicalReport.find({ userId: patientId });

        res.status(200).json(reports);
    } catch (error) {
        next(error);
    }
};

module.exports.addFeedback = async (req, res, next) => {
    try {
        const { reportId } = req.params;
        const { feedback } = req.body;

        const report = await MedicalReport.findById(reportId);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }

        report.feedback = feedback;
        await report.save();

        res.status(200).json(report);
    } catch (error) {
        next(error);
    }
};