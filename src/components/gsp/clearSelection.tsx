'use client';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { useGlobalStore } from '@/lib/stores/globalStore';

export function ClearSelection() {
  const breadcrumbs = useGlobalStore(state => state.breadcrumbs);
  const setSelectedIdAndBreadcrumbs = useGlobalStore(
    state => state.setSelectedIdAndBreadcrumbs,
  );
  if (breadcrumbs.length === 0) {
    return;
  }
  return (
    <div
      className='cursor-pointer flex justify-center items-center size-6 '
      onClick={() => {
        setSelectedIdAndBreadcrumbs(null, []);
      }}>
      <X />
    </div>
  );
}
