'use client';

import HierarchyItem from '@/components/hierarchy/hierarchy-item';
import { HierarchyListProps } from '@/types/components/hierarchy';

export default function HierarchyList({
  items,
  selectedId,
  openedIds,
  onToggleItem,
  onSelectItem,
  className = '',
}: HierarchyListProps) {
  return (
    <>
      {items.map(item => (
        <div key={item.ID} className={`ml-[20px] relative ${className}`}>
          <HierarchyItem
            item={item}
            isSelected={item.ID === selectedId}
            isOpened={openedIds.includes(item.ID)}
            hasChildren={item.Children.length > 0}
            onToggle={() => onToggleItem(item.ID)}
            onSelect={() => onSelectItem(item.ID)}
          />
          {item.Children?.length > 0 && openedIds.includes(item.ID) && (
            <HierarchyList
              items={item.Children}
              selectedId={selectedId}
              openedIds={openedIds}
              onToggleItem={onToggleItem}
              onSelectItem={onSelectItem}
            />
          )}
        </div>
      ))}
    </>
  );
}
