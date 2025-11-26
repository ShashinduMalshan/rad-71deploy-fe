import React from 'react';

const AmazingLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 w-24 h-24 animate-spin"></div>
        
        {/* Middle rotating ring */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-cyan-400 border-l-blue-500 w-20 h-20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 animate-pulse"></div>
        
        {/* Center dot */}
        <div className="absolute inset-8 rounded-full bg-white w-8 h-8 shadow-lg shadow-purple-500/50"></div>
      </div>
      

      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '500ms' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1500ms' }}></div>
      </div>
    </div>
  );
};

export default AmazingLoader;