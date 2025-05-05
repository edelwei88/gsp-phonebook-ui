'use client';
import { cn } from '@/lib/utils';
import React, { useState, createContext, useContext } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import {
  IconMenu2,
  IconX,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';

interface Links {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

interface SidebarBodyProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const SidebarBody = ({ children, ...props }: SidebarBodyProps) => {
  return (
    <>
      <DesktopSidebar {...props}>{children}</DesktopSidebar>
      <MobileSidebar>{children}</MobileSidebar>
    </>
  );
};

interface DesktopSidebarProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: DesktopSidebarProps) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        'h-full px-2 py-2 hidden md:flex flex-col bg-neutral-100 dark:bg-neutral-800 w-[350px] shrink-0 relative',
        className,
      )}
      animate={{
        width: animate ? (open ? '550px' : '60px') : '350px',
      }}
      {...props}>
      <button
        onClick={() => setOpen(!open)}
        className='absolute h-10 w-10 right-[-10] top-4 z-10 bg-input rounded-full p-1 shadow-md border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors'>
        {open ? (
          <IconChevronLeft className='w-7 h-7 text-foreground' />
        ) : (
          <IconChevronRight className='w-7 h-7 text-foreground' />
        )}
      </button>
      {children}
    </motion.div>
  );
};

interface MobileSidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileSidebar = ({ className, children }: MobileSidebarProps) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={cn(
        'h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full',
      )}>
      <div className='flex justify-end z-20 w-full'>
        <IconMenu2
          className='text-neutral-800 dark:text-neutral-200'
          onClick={() => setOpen(!open)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={cn(
              'fixed h-full w-[350px] inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between',
              className,
            )}>
            <div
              className='absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200'
              onClick={() => setOpen(!open)}>
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface SidebarLinkProps {
  link: Links;
  className?: string;
}

export const SidebarLink = ({ link, className }: SidebarLinkProps) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={cn(
        'flex items-center justify-start gap-2 group/sidebar py-2 px-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors',
        className,
      )}>
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className='text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0'>
        {link.label}
      </motion.span>
    </a>
  );
};
