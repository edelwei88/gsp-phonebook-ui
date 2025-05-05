import { TreeItem } from '@/types/api/tree-item';

type HierarchyItem = {
  id: string;
  name: string;
};

type HierarchyItemProps = {
  item: HierarchyItem;
  selected: boolean;
  opened: boolean;
  parent: boolean;
  onClick(): void;
  onToggle(): void;
};

type HierarchyProps = {
  items: TreeItem[];
};

export type { HierarchyItem, HierarchyItemProps, HierarchyProps };
