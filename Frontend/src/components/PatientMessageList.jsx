import React from 'react';

const PatientMessageList = ({ messages, doctorId }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.senderId === doctorId ? 'sent' : 'received'}`}>
          <strong>
            {msg.senderId === doctorId ? 'Doctor' : 'You'}:
          </strong> {msg.content}
        </div>
      ))}
    </div>
  );
};

export default PatientMessageList;