import React, { useEffect, useState, useContext } from 'react';
import { DoctorDataContext } from '../context/DoctorContext';
import io from 'socket.io-client';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const socket = io('http://localhost:4000');

const DoctorHomePage = () => {
  const { doctor } = useContext(DoctorDataContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (doctor) {
      socket.emit('join', { userId: doctor._id, userType: 'doctor' });

      socket.on('receiveMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.off('receiveMessage');
      };
    }
  }, [doctor]);

  const sendMessage = () => {
    const receiverId = '67c088ea9168239c9e403e87'; // Example user ID
    const receiverModel = 'User';
    socket.emit('sendMessage', {
      senderId: doctor._id,
      senderModel: 'Doctor',
      receiverId,
      receiverModel,
      content: message,
    });
    setMessages((prevMessages) => [
      ...prevMessages,
      { senderId: doctor._id, content: message },
    ]);
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
      <p>Name: {doctor?.fullname.firstname} {doctor?.fullname.lastname}</p>
      <p>Email: {doctor?.email}</p>
      <p>Specialty: {doctor?.specialty}</p>

      <h2 className="text-xl font-bold mt-4">Messages</h2>
      <MessageList messages={messages} doctorId={doctor?._id} />
      <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
};

export default DoctorHomePage;