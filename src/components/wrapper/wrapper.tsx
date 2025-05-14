'use client';

import { useState, useCallback, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HierarchyTableProps {
  hierarchyChildren: ReactNode;
  children: ReactNode;
  pagination?: ReactNode;
}

export default function HierarchyTable({
  hierarchyChildren,
  children,
  pagination,
}: HierarchyTableProps) {
  const [isHierarchyVisible, setIsHierarchyVisible] = useState(true);

  const handleToggleHierarchy = useCallback(() => {
    setIsHierarchyVisible(prev => !prev);
  }, []);

  return (
    <div className='flex relative h-[calc(100vh-170px)]'>
      {' '}
      <div
        className={`flex flex-col h-full bg-card p-5 rounded-[15px] transition-transform ${
          isHierarchyVisible ? 'w-1/3 min-w-[300px]' : 'w-0 min-w-0 opacity-0'
        }`}
        style={{
          transitionProperty: 'width, min-width, opacity',
          overflowY: 'auto',
        }}>
        {isHierarchyVisible && hierarchyChildren}
      </div>
      <div
        className={`relative flex-1 flex flex-col bg-card rounded-[15px] overflow-hidden ${
          isHierarchyVisible ? 'ml-4' : 'ml-0'
        }`}>
        <div
          className='flex-1 overflow-y-auto'
          style={{
            maxHeight: 'calc(100vh - 170px)',
            marginBottom: pagination ? '64px' : '0',
          }}>
          {children}
        </div>

        {pagination && (
          <div className='absolute bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex items-center p-3'>
            {pagination}
          </div>
        )}
      </div>
      <button
        onClick={handleToggleHierarchy}
        className='absolute top-1/2 -translate-y-1/2 left-[-40px] p-2 bg-blue-500 text-white rounded-r-[15px] hover:bg-blue-600 z-10 shadow-md'>
        {isHierarchyVisible ? (
          <ChevronLeft className='w-5 h-5' />
        ) : (
          <ChevronRight className='w-5 h-5' />
        )}
      </button>
    </div>
  );
}
