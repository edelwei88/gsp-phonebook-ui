import Image from 'next/image';
import Link from 'next/link';
import BtnHelp from '@/components/navbar/btn-help';
import { ThemeSwitcher } from '@/components/navbar/theme-switcher';

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={`flex mb-2 justify-between ${className}`}>
      <div className='flex items-center space-x-4'>
        <Link
          href={'/phonebook'}
          className='text-xl font-bold'
          prefetch={false}
        >
          <Image
            priority={true}
            src='/svgs/logo.svg'
            height={36}
            width={250}
            alt='Газстройпром'
          />
        </Link>
      </div>

      <div className='flex items-center space-x-4'>
        <BtnHelp />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
