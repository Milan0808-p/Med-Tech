const messageService = require('../services/message.service');

module.exports.sendMessageFromDoctorToPatient = async (req, res, next) => {
  try {
    const { receiverId, content } = req.body;
    const senderId = req.doctor._id;
    const senderModel = 'Doctor';
    const receiverModel = 'User';
    const message = await messageService.sendMessage(senderId, senderModel, receiverId, receiverModel, content);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports.getConversation = async (req, res, next) => {
  try {
    const doctorId = req.doctor._id;
    const patientId = req.params.patientId;
    const messages = await messageService.getMessages(doctorId, 'Doctor', patientId, 'User');
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};