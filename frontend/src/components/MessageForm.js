import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert(`Message sent: ${message}`); // Placeholder for messaging functionality
    setMessage('');
  };

  return (
    <div>
      <h2>Send a Message</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message" />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageForm;
