'use client';
import React, { ReactNode, useState } from 'react';
import { Sidebar, SidebarBody } from '../ui/sidebar';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { HierarchyWrapper } from '../hierarchy/hierarchy-wrapper';

export function SidebarWrapper({
  hierarchy,
  children,
}: {
  hierarchy: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(
        'mx-auto mt-5 flex w-full max-w-9xl flex-col rounded-md border border-neutral-200 md:flex-row dark:border-neutral-700',
        'h-[78vh]',
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10 py-15 overflow-y-scroll px-1'>
          <motion.div
            initial={false}
            animate={{
              x: open ? 0 : '-100%',
              opacity: open ? 1 : 0,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className='h-full'>
            {hierarchy}
          </motion.div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
