import React, { useState } from 'react';

function PatientChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    // Simulate chatbot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: "How can I help you?" }]);
    }, 1000);
  };

  return (
    <div>
      <h2>Chat with our Bot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default PatientChatbot;
