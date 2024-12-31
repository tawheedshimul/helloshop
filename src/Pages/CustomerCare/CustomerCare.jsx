import React, { useState } from 'react';

function CustomerCare() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { sender: 'user', text: input },
        { sender: 'bot', text: 'Thank you for your message. How can I assist further?' },
      ]);
      setInput(''); // Clear input field
    }
  };

  const Message = ({ sender, text }) => {
    const isUser = sender === 'user';
    return (
      <div
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-2`}
      >
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
            B
          </div>
        )}
        <div
          className={`max-w-xs p-3 rounded-lg ${
            isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-blue-500 text-white text-center text-lg font-semibold">
          Customer Care Chat
        </div>
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
        </div>
        <div className="p-4 bg-gray-100 flex items-center space-x-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg focus:outline-none"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
