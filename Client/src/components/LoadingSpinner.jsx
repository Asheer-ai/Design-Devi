import React from 'react';

const LoadingSpinner = () => (
    <div className='flex items-center gap-2'>
        <div className='flex gap-1'>
            <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></div>
            <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></div>
            <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></div>
        </div>
        <span className='text-sm text-purple-300'>Channeling divine wisdom...</span>
    </div>
);

export default LoadingSpinner