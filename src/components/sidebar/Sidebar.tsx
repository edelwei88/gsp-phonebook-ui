'use client';
import React, { ReactNode, useState } from 'react';
import { Sidebar, SidebarBody } from '../ui/sidebar';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Hierarchy from '../hierarchy/hierarchy';

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
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
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
const Dashboard = ({ children }: { children: ReactNode }) => {
  return <div className='flex flex-1'>{children}</div>;
};
