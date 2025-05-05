'use client';

import { HierarchyItemProps } from '@/types/components/hierarchy';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HierarchyItem({
  item,
  selected = false,
  opened = false,
  parent = false,
  onClick,
  onToggle,
}: HierarchyItemProps) {
  return (
    <div className='flex items-center relative'>
      <div className='size-7' onClick={onToggle}>
        {parent &&
          (opened ? (
            <ChevronDown className='cursor-pointer dark:text-aliceblue' />
          ) : (
            <ChevronRight className='dark:text-aliceblue cursor-pointer' />
          ))}
      </div>

      <span
        onClick={onClick}
        className={cn(
          selected
            ? 'text-blue-400 select-none'
            : 'text-freground dark:text-aliceblue select-none cursor-pointer',
          'text-lg',
        )}>
        {item.name}
      </span>
    </div>
  );
}
