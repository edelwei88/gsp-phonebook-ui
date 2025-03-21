'use client';
import { X } from 'lucide-react';
import { useGlobalStore } from '@/lib/stores/globalStore';

export function ClearSearch() {
  const setSearchData = useGlobalStore(state => state.setSearchData);
  const setPage = useGlobalStore(state => state.setPage);
  return (
    <div
      className='cursor-pointer flex justify-center items-center size-6 '
      onClick={() => {
        setSearchData({ attribute: '', value: '' });
        setPage(1);
      }}>
      <X />
    </div>
  );
}
