import { GetOrganizationTree } from '@/api/get-organization-tree';
import { HierarchyRecursive } from './hierarchy-recursive';

export async function HierarchyWrapper() {
  const data = await GetOrganizationTree();

  return <HierarchyRecursive items={data} allItems={data} />;
}
