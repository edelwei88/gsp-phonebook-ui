'use client';

import { ChevronRight, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { HierarchyItemProps } from '@/types/components/hierarchy';

export default function HierarchyItem({
  item,
  isSelected,
  isOpened,
  hasChildren,
  onToggle,
  onSelect,
}: HierarchyItemProps) {
  return (
    <div className='flex items-center relative'>
      <div className='size-7' onClick={onToggle}>
        {hasChildren &&
          (isOpened ? (
            <ChevronDown className='cursor-pointer dark:text-aliceblue' />
          ) : (
            <ChevronRight className='dark:text-aliceblue cursor-pointer' />
          ))}
      </div>

      <span
        onClick={onSelect}
        className={cn(
          isSelected
            ? 'text-blue-400 select-none'
            : 'text-freground dark:text-aliceblue select-none cursor-pointer',
          'text-lg',
        )}>
        {item.Name}
      </span>
    </div>
  );
}
