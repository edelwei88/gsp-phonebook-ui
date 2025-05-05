import { API } from '@/consts/api';
import { EmployeesResponse, User } from '@/types/api/user';
import { checkSearchAttribute } from '@/lib/check-search-attribute';

export async function Search(
  value: string,
  attribute: string,
): Promise<EmployeesResponse> {
  if (!checkSearchAttribute(attribute)) throw new Error('Wrong parameters');

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const queryParams = new URLSearchParams();
  queryParams.append('value', value);
  queryParams.append('attribute', attribute);

  const response = await fetch(
    API.ADDR + API.ENDPOINTS.search + '?' + queryParams.toString(),
    requestOptions,
  );

  if (!response.ok)
    throw new Error('Status code: ' + response.status.toString());

  const json: EmployeesResponse = await response.json();

  return json;
}
