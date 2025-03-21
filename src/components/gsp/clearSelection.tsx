'use client';
import { X } from 'lucide-react';
import { useGlobalStore } from '@/lib/stores/globalStore';

export function ClearSelection() {
  const setSelectedIdAndBreadcrumbs = useGlobalStore(
    state => state.setSelectedIdAndBreadcrumbs,
  );
  const setPage = useGlobalStore(state => state.setPage);
  return (
    <div
      className='cursor-pointer flex justify-center items-center size-6 '
      onClick={() => {
        setSelectedIdAndBreadcrumbs(null, []);
        setPage(1);
      }}>
      <X />
    </div>
  );
}
