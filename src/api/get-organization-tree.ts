import { API } from '@/consts/api';
import { makeUnique } from '@/lib/make-unique';
import { TreeItem } from '@/types/api/tree-item';

export async function GetOrganizationTree(): Promise<TreeItem[]> {
  const response = await fetch(API.ADDR + API.ENDPOINTS.get_organization_tree, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok)
    throw new Error('Status code: ' + response.status.toString());

  const json: TreeItem[] = await response.json();

  return makeUnique(json);
}
