'use server';

import { GetOrganizationTree } from '@/api/get-organization-tree';
import { Hierarchy } from './hierarchy';

export async function HierarchyWrapper() {
  const data = await GetOrganizationTree();

  return <Hierarchy items={data} />;
}
