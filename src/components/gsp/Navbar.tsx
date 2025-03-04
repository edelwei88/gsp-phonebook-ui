import React from 'react';
import Logo from './Logo';
import QuestionMark from './QuestionMark';
import ThemeChanger from './ThemeChanger';
import Logout from './Logout';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-[16px] bg-white text-black'>
      <div className='flex items-center space-x-4'>
        <h1 className='text-xl font-bold'>
          <Logo />
        </h1>
      </div>

      <div className='flex items-center space-x-4'>
        <button className='bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50'>
          <QuestionMark />
        </button>
        <button className='bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50'>
          <ThemeChanger />
        </button>
        <button className='bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50'>
          <Logout />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
