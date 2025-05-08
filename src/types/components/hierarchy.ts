import { TreeItem } from '@/types/api/tree-item';

type HierarchyItemProps = {
  item: TreeItem;
  selected: boolean;
  opened: boolean;
  parent: boolean;
  onClick(): void;
  onToggle(): void;
};

type HierarchyProps = {
  items: TreeItem[];
};

export type { HierarchyItemProps, HierarchyProps };
