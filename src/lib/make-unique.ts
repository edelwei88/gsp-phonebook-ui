import { TreeItem } from '@/types/api/tree-item';

export function makeUnique(arr: TreeItem[]): TreeItem[] {
  const seen = new Set<string>();
  return arr.filter(item => {
    if (seen.has(item.ID)) {
      return false;
    }
    seen.add(item.ID);
    return true;
  });
}
