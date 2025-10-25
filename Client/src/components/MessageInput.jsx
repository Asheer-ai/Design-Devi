import React from 'react';

const MessageInput = ({ input, setInput, isLoading, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-700">
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about the path of design..."
        disabled={isLoading}
        className="flex-1 bg-gray-800 rounded-l-lg p-3 outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
        />
        <button
        type="submit"
        disabled={isLoading}
        className="bg-purple-600 hover:bg-purple-700 rounded-r-lg px-6 py-3 font-semibold transition-colors disabled:opacity-50"
        >
        {isLoading ? '...' : 'Send'}
        </button>
    </form>
    );

export default MessageInput;

