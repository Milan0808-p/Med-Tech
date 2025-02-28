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