import { GetOrganizationTree } from '@/api/get-organization-tree';
import { HierarchyRouteProcess } from './hierarchy-route-process';
import { Suspense } from 'react';

export async function HierarchyWrapper() {
  const data = await GetOrganizationTree();

  return (
    <Suspense>
      <HierarchyRouteProcess items={data} allItems={data} />
    </Suspense>
  );
}
