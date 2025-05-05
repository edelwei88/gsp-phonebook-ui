import { TreeItem } from '@/types/api/tree-item';
import { BreadcrumbItemProps } from '@/types/components/breadcrumbs';
import { fetchHierarchy } from '@/api/get-organization-tree';

export function generateBreadcrumbs(
  items: TreeItem[],
  id: string,
): BreadcrumbItemProps[] {
  const result: BreadcrumbItemProps[] = [];
  const itemsMap = new Map<string, TreeItem>();

  function buildItemsMap(treeItems: TreeItem[]) {
    treeItems.forEach(item => {
      itemsMap.set(item.ID, item);
      if (item.Children.length > 0) {
        buildItemsMap(item.Children);
      }
    });
  }

  buildItemsMap(items);

  function buildParentChain(currentId: string) {
    const currentItem = itemsMap.get(currentId);
    if (!currentItem) return;

    result.unshift({
      item: {
        id: currentItem.ID,
        name: currentItem.Name,
      },
      active: currentId === id,
    });

    for (const [parentId, parentItem] of itemsMap) {
      if (parentItem.Children.some(child => child.ID === currentId)) {
        buildParentChain(parentId);
        break;
      }
    }
  }

  buildParentChain(id);
  return result;
}

export async function loadHierarchyData(): Promise<{
  data: TreeItem[];
}> {
  try {
    const data = await fetchHierarchy();
    return {
      data,
    };
  } catch (error) {
    console.error('Failed to load hierarchy:', error);
    return { data: [] };
  }
}
