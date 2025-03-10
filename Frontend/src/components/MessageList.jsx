import React from 'react';

const MessageList = ({ messages, doctorId, isDoctor }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.senderId === doctorId ? 'sent' : 'received'}`}>
          <strong>
            {msg.senderId === doctorId
              ? (isDoctor ? 'You' : 'Doctor')
              : (isDoctor ? 'Patient' : 'You')}
            :
          </strong> {msg.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;