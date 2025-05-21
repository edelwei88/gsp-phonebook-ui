import { API } from '@/consts/api';
import { EmployeesResponse } from '@/types/api/user';
import { checkSearchAttribute } from '@/lib/check-search-attribute';

export async function Search(
  value: string,
  attribute: string,
  page: number = 1,
  size: number = 50,
): Promise<EmployeesResponse> {
  if (!checkSearchAttribute(attribute)) throw new Error('Wrong parameters');

  const queryParams = new URLSearchParams();
  queryParams.append('value', value);
  queryParams.append('attribute', attribute);
  queryParams.append('page', page.toString());
  queryParams.append('size', size.toString());

  const response = await fetch(
    API.ADDR + API.ENDPOINTS.search + '?' + queryParams.toString(),
    {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok)
    throw new Error('Status code: ' + response.status.toString());

  const json: EmployeesResponse = await response.json();

  return json;
}
