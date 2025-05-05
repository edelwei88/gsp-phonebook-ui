import { createBreadcrumbsStore } from '@/stores/breadcrumbs-store';
import { createHierarchyStore } from '@/stores/hierarchy-store';
import { BreadcrumbsItem } from '@/types/components/breadcrumbs';

const setBreadcrumbs = createBreadcrumbsStore(store => store.assign);
const setHierarchy = createHierarchyStore(store => store.assignSelectedId);
export function SetBreadcrumbs(items: BreadcrumbsItem[]) {
  setBreadcrumbs(items);
  setHierarchy(items[items.length - 1]?.id || '');
}
