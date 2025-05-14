'use client';
import { generateBreadcrumbs } from '@/lib/generate-breadcrumbs';
import { useHierarchyStore } from '@/stores/hierarchy-store';
import { TreeItem } from '@/types/api/tree-item';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { HierarchyRecursive } from './hierarchy-recursive';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs-store';

export function HierarchyRouteProcess({
  items,
  allItems,
}: {
  items: TreeItem[];
  allItems: TreeItem[];
}) {
  const searchParams = useSearchParams();
  const setSelectedId = useHierarchyStore(state => state.setSelectedId);
  const setOpenedIds = useHierarchyStore(state => state.setOpenedIds);
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);

  useEffect(() => {
    const id =
      searchParams.get('department_id') ||
      searchParams.get('organization_id') ||
      (searchParams.has('value') ? '' : allItems[0].ID);

    const breadcrumbs = generateBreadcrumbs(id, allItems);
    setSelectedId(id);
    setBreadcrumbs(breadcrumbs);
    setOpenedIds(breadcrumbs.slice(0, -1).map(value => value.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <HierarchyRecursive items={items} allItems={allItems} />;
}
