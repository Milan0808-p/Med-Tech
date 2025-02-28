import React from 'react';

const MessageInput = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="message-input mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2 mt-2">
        Send
      </button>
    </div>
  );
};

export default MessageInput;