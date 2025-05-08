import { TreeItem } from '@/types/api/tree-item';
import { BreadcrumbsItem } from '@/types/components/breadcrumbs';

export function generateBreadcrumbs(
  target: string,
  items: TreeItem[],
): BreadcrumbsItem[] {
  const breadcrumbs: BreadcrumbsItem[] = [];

  function process(items: TreeItem[]): boolean {
    let found = false;

    for (const el of items) {
      if (el.ID === target) {
        breadcrumbs.unshift({
          id: el.ID,
          name: el.Name,
        });
        found = true;
        return found;
      }
    }

    for (const el of items) {
      if (el.Children.length > 0 && process(el.Children)) {
        breadcrumbs.unshift({
          id: el.ID,
          name: el.Name,
        });
        found = true;
        return found;
      }
    }

    return found;
  }

  process(items);
  console.log(breadcrumbs);

  return breadcrumbs;
}
