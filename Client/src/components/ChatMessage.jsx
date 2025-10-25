import React from 'react';

const ChatMessage = ({ role, content }) => {
    const isDevi = role === 'devi';

    if (isDevi) {
        return (
            <div className="flex justify-start mb-2">
                <div className="flex items-start space-x-3">
                    <img src="/devi_img.jpg" alt="Devi" className="w-8 h-8 rounded-full flex-shrink-0 mt-1" />
                    <div className="bg-purple-800 p-3 rounded-lg max-w-lg">
                        <p className="whitespace-pre-wrap">{content}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-end mb-2">
            <div className="bg-gray-700 p-3 rounded-lg max-w-lg">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ChatMessage;

