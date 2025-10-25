import React, { useState } from 'react';
import { Sparkles, Trash2, Menu } from 'lucide-react';

const Header = ({ onClearChat, messageCount }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='flex items-center justify-between p-4 border-b border-purple-500/30 bg-gray-900/50 backdrop-blur-sm'>
            <div className='flex items-center'>
                <div className='relative'>
                    <img 
                        src="/devi_img.jpg" 
                        alt="Design Devi" 
                        className='w-14 h-14 rounded-full mr-4 border-2 border-purple-400 shadow-lg shadow-purple-500/50 object-cover'
                    />
                    <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse'></div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 flex items-center gap-1'>
                        Design Devi
                        <Sparkles className='w-5 h-5 text-yellow-400 animate-pulse' />
                    </h1>
                    <p className="text-sm text-gray-400 ml-2">The Goddess of Design Wisdom</p>
                </div>
            </div>

            <div className='relative'>
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className='p-2 hover:bg-purple-800/30 rounded-lg transition-colors'
                    aria-label='Menu'
                >
                    <Menu className='w-6 h-6' />
                </button>

                {showMenu && (
                    <div className='absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-purple-500/30 z-50'>
                        <div className='p-3 border-b border-gray-700'>
                            <p className='text-xs text-gray-400'>Messages: {messageCount}</p>
                        </div>
                        <button
                            onClick={() => {
                                onClearChat();
                                setShowMenu(false);
                            }}
                            className='w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-800/30 transition-colors text-left'
                        >
                            <Trash2 className='w-4 h-4 text-red-400' />
                            <span>Clear Chat History</span>
                        </button>
                        <div className='p-3 border-t border-gray-700'>
                            <p className='text-xs text-gray-500'>Design Devi v1.0</p>
                        </div>
                    </div>
                )}
            </div>

            {showMenu && (
                <div 
                    className='fixed inset-0 z-40'
                    onClick={() => setShowMenu(false)}
                ></div>
            )}
        </header>
    );
};

export default Header;