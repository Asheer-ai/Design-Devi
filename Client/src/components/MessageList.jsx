import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import LoadingSpinner from './LoadingSpinner';

const MessageList = ({ messages, isLoading }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-4">
            
            {messages.map((msg, index) => (
                <ChatMessage 
                    key={index} 
                    role={msg.role} 
                    content={msg.content}
                    timestamp={msg.timestamp}
                    isError={msg.isError}
                />
            ))}
            
            {isLoading && (
                <div className="flex justify-start mb-4">
                    <div className="flex items-start space-x-3">
                        <img 
                            src="/devi_img.jpg" 
                            alt="Design Devi" 
                            className="w-10 h-10 rounded-full border-2 border-purple-400 object-cover" 
                        />
                        <div className="bg-purple-800 p-4 rounded-lg">
                            <LoadingSpinner />
                        </div>
                    </div>
                </div>
            )}

            <div ref={bottomRef} />
        </div>
    );
};

export default MessageList;