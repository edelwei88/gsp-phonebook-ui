'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return <div className='w-6 h-6' />;
  }

  return (
    <button
      className='px-4 py-2 rounded-[15px] cursor-pointer'
      onClick={handleClick}
    >
      {theme === 'light' ? <Sun size='24' /> : <Moon size='24' />}
    </button>
  );
}
