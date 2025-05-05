import { API } from '@/consts/api';
import { makeUnique } from '@/lib/make-unique';
import { TreeItem } from '@/types/api/tree-item';

export const fetchHierarchy = async (): Promise<TreeItem[]> => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    API.ADDR + API.ENDPOINTS.get_organization_tree,
    requestOptions,
  );

  if (!response.ok)
    throw new Error('Status code: ' + response.status.toString());

  const json: TreeItem[] = await response.json();

  return makeUnique(json);
};
