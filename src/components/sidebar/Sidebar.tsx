'use client';
import React, { useState } from 'react';
import { Sidebar, SidebarBody } from '../ui/sidebar';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Hierarchy from '../hierarchy/hierarchy';

export function SidebarDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-9xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800',
        'min-h-[78vh]',
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10 py-15'>
          <motion.div
            animate={{
              visibility: open ? 'visible' : 'hidden',
              opacity: open ? 1 : 0,
              transition: { duration: 0.2 },
            }}
            className='h-full'>
            <Hierarchy />
          </motion.div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
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
