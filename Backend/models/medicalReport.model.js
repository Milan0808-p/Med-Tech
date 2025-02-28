const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalReportSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    report: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        default: 'Pending'
    },
    feedback: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('MedicalReport', medicalReportSchema);