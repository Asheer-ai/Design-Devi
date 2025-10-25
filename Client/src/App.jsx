import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import WelcomeScreen from './components/WelcomeScreen';
import axios from 'axios';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const savedMessages = localStorage.getItem('designDeviChat');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);


  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('designDeviChat', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString()
    };
    setMessages([...messages, userMessage]);

    setInput('');
    setIsLoading(true);

    try {

      const response = await axios.post('http://localhost:3000/api/chat', {
        message: input.trim(),
      });

      const deviMessage = {
        role: 'devi',
        content: response.data.reply,
        timestamp: new Date().toISOString()
      };
      setMessages((prev) => [...prev, deviMessage]);

    } catch (error) {
      console.error('Error:', error);

      let errorText = 'My apologies, child. A fog obscures my vision. Please try again.';
      
      if (error.code === 'ERR_NETWORK') {
        errorText = '🔌 Cannot connect to the server. Please make sure the backend is running.';
      }
      
      const errorMessage = {
        role: 'devi',
        content: errorText,
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (window.confirm('Clear all messages?')) {
      setMessages([]);
      localStorage.removeItem('designDeviChat');
    }
  };

  const handleSuggestion = (text) => {
    setInput(text);
  };

  return (
    <div className='flex flex-col h-screen bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white'>
      <Header onClearChat={handleClearChat} messageCount={messages.length} />
      
      <div className='h-screen overflow-auto'>
      {messages.length === 0 ? (
        <WelcomeScreen onSuggestionClick={handleSuggestion} />
      ) : (
        <MessageList messages={messages} isLoading={isLoading} />
      )}
      </div>

      <MessageInput
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;