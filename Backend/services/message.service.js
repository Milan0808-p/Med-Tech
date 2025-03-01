const Message = require('../models/message.model');
const doctorModel = require('../models/doctor.model');
const userModel = require('../models/user.model');

module.exports.sendMessage = async (senderId, senderModel, receiverId, receiverModel, content) => {
  if (!senderId || !senderModel || !receiverId || !receiverModel || !content) {
    throw new Error('Sender ID, Sender Model, Receiver ID, Receiver Model, and content are required');
  }

  const message = new Message({
    senderId,
    senderModel,
    receiverId,
    receiverModel,
    content,
    createdAt: new Date()
  });

  await message.save();

  // Add message ID to sender and receiver
  await doctorModel.findByIdAndUpdate(senderId, { $push: { messages: message._id } });
  await userModel.findByIdAndUpdate(receiverId, { $push: { messages: message._id } });

  return message;
};

module.exports.getMessages = async (doctorId, doctorModel, patientId, patientModel) => {
  if (!doctorId || !doctorModel || !patientId || !patientModel) {
    throw new Error('Both user IDs and their models are required');
  }

  const messages = await Message.find({
    $or: [
      { senderId: doctorId, senderModel: doctorModel, receiverId: patientId, receiverModel: patientModel },
      { senderId: patientId, senderModel: patientModel, receiverId: doctorId, receiverModel: doctorModel }
    ]
  }).sort({ createdAt: 1 });

  return messages;
};