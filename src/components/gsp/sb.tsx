'use client'
import { useState } from 'react';
import ArrowRight from '@/components/gsp/ArrowRight';

const Sb = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-full">
      <div
        className={`flex flex-col h-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'w-96' : 'w-0 opacity-0'
        }`}
      >
        <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-xl font-bold text-gray-800 mb-4">SIDEBAR</p>
        </div>
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 bg-blue-500 hover:bg-blue-600 rounded-full shadow-md transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute left-[-30px] top-3 p-2 h-10 bg-blue-500 hover:bg-blue-600 rounded-r-full shadow-md transition-all duration-300 text-white"
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default Sb;