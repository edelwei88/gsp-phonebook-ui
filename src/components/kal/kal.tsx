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
    <div className='flex h-[78vh] relative'>
      <div
        className={`flex flex-col h-full bg-alice dark:bg-onyx p-2 rounded-[15px] overflow-y-auto transition-all duration-300 ease-in-out ${
          isHierarchyVisible ? 'w-1/3 min-w-[300px]' : 'w-0 min-w-0 opacity-0'
        }`}
        style={{ transitionProperty: 'width, min-width, opacity' }}>
        {isHierarchyVisible && hierarchyChildren}
      </div>

      <div
        className={`flex-1 flex flex-col bg-alice dark:bg-onyx dark:text-aliceblue rounded-[15px] overflow-hidden transition-all duration-300 ease-in-out ${
          isHierarchyVisible ? 'ml-4' : 'ml-0'
        }`}>
        <div className='flex-1 overflow-y-auto'>{children}</div>
        {pagination && <div className='mt-auto mb-3'>{pagination}</div>}
      </div>

      <button
        onClick={handleToggleHierarchy}
        className='absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-blue-500 text-white rounded-r-[15px] hover:bg-blue-600 transition-colors z-10 shadow-md'>
        {isHierarchyVisible ? (
          <ChevronLeft className='w-5 h-5' />
        ) : (
          <ChevronRight className='w-5 h-5' />
        )}
      </button>
    </div>
  );
}
