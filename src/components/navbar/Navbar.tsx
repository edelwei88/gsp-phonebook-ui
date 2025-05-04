'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CircleHelp } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function Navbar({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className={`flex mb-6 justify-between ${className}`}>
      <div className='flex items-center space-x-4'>
        <Link href={'/'} className='text-xl font-bold'>
          <Image
            src='svgs/logo.svg'
            height={24}
            width={200}
            alt='Газстройпром'
          />
        </Link>
      </div>

      <div className='flex items-center space-x-4'>
        <button className='cursor-pointer'>
          <CircleHelp />
        </button>
        <button
          className='px-4 py-2 rounded-[15px] cursor-pointer'
          onClick={handleClick}>
          {theme === 'light' ? <Sun size='24' /> : <Moon size='24' />}
        </button>
      </div>
    </header>
  );
}
