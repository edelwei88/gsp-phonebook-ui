'use client';
import React, { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-9xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800',
        'min-h-[78vh]',
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-1 flex-col overflow-x-hidden overflow-y-auto'>
            {open ? <Logo /> : <LogoIcon />}
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href='#'
      className='relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black'>
      <div className='h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-medium whitespace-pre text-black dark:text-white'>
        Организации
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href='#'
      className='relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black'>
      <div className='h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white' />
    </a>
  );
};

const Dashboard = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900'>
        <div className='flex gap-2'>
          {[...new Array(4)].map((i, idx) => (
            <div
              key={'first-array-demo-1' + idx}
              className='h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800'></div>
          ))}
        </div>
        <div className='flex flex-1 gap-2'>
          {[...new Array(2)].map((i, idx) => (
            <div
              key={'second-array-demo-1' + idx}
              className='h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800'></div>
          ))}
        </div>
      </div>
    </div>
  );
};
