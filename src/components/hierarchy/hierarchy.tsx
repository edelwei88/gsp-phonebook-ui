'use client';

import { useEffect, useState } from 'react';

import { TreeItem } from '@/types/api/tree-item';
import { useGlobalStore } from '@/stores/global-store';
import HierarchyList from '@/components/hierarchy/hierarchy-list';

import { generateBreadcrumbs, loadHierarchyData } from '@/lib/hierarchy';

export default function Hierarchy() {
  const selectedId = useGlobalStore(state => state.selectedId);
  const setSelectedIdAndBreadcrumbs = useGlobalStore(
    state => state.setSelectedIdAndBreadcrumbs,
  );
  const [allItems, setAllItems] = useState<TreeItem[]>([]);
  const [openedIds, setOpenedIds] = useState<string[]>([]);
  const setSearchData = useGlobalStore(state => state.setSearchData);

  useEffect(() => {
    const initializeHierarchy = async () => {
      const { data } = await loadHierarchyData();
      setAllItems(data);
    };

    initializeHierarchy();
  }, []);

  const handleToggleItem = (id: string) => {
    setOpenedIds(prev =>
      prev.includes(id) ? prev.filter(el => el !== id) : [...prev, id],
    );
  };

  const handleSelectItem = (id: string) => {
    setSelectedIdAndBreadcrumbs(id, generateBreadcrumbs(allItems, id));
    setSearchData({ attribute: '', value: '' });
  };

  return (
    <div className='mt-5 ml-5 flex flex-col gap-1'>
      <HierarchyList
        items={allItems}
        selectedId={selectedId}
        openedIds={openedIds}
        onToggleItem={handleToggleItem}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
