import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-blue-500 text-white text-center py-4">
                    <h1 className="text-2xl font-bold">City Explorer Chat</h1>
                </div>
                <div className="p-4">
                    <div id="chat-window" className="h-96 overflow-y-scroll border border-gray-300 p-2 mb-4">
                        {messages.map((msg, index) => (
                            <div key={index} className="bg-blue-100 p-2 my-2 rounded-lg">
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input 
                            id="message-input" 
                            type="text" 
                            className="flex-grow border border-gray-300 p-2 rounded-l-lg" 
                            placeholder="Type your message..." 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button 
                            id="send-button" 
                            className="bg-blue-500 text-white p-2 rounded-r-lg"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;