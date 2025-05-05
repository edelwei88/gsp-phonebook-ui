'use client';

import { useEffect, useState } from 'react';
import { HierarchyProps } from '@/types/components/hierarchy';

export function Hierarchy({ items }: HierarchyProps) {
  const [selectedId, setSelectedId] = useState<string>('');
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  return <div className='mt-5 ml-5 flex flex-col gap-1'></div>;
}
