import { GetOrganizationTree } from '@/api/get-organization-tree';
import { HierarchyRouteProcess } from './hierarchy-route-process';

export async function HierarchyWrapper() {
  const data = await GetOrganizationTree();

  return <HierarchyRouteProcess items={data} allItems={data} />;
}
