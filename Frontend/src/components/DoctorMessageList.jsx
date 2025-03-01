import React from 'react';

const DoctorMessageList = ({ messages, doctorId }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.senderId === doctorId ? 'sent' : 'received'}`}>
          <strong>
            {msg.senderId === doctorId ? 'You' : 'Patient'}:
          </strong> {msg.content}
        </div>
      ))}
    </div>
  );
};

export default DoctorMessageList;