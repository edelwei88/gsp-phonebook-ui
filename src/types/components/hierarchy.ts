import { TreeItem } from '@/types/api/tree-item';

interface HierarchyItemProps {
  item: TreeItem;
  isSelected: boolean;
  isOpened: boolean;
  hasChildren: boolean;
  onToggle(): void;
  onSelect(): void;
}

type HierarchyListProps = {
  items: TreeItem[];
  selectedId: string | null;
  openedIds: string[];
  onToggleItem(id: string): void;
  onSelectItem(id: string): void;
  className?: string;
};

export type { HierarchyItemProps, HierarchyListProps };
