'use server';

import { EmployeesResponse } from '@/types/api/user';
import { API } from '@/consts/api';

export async function GetEmployees(
  employee_id: string | null = null,
  department_id: string | null = null,
  organization_id: string | null = null,
  page: number = 1,
  size: number = 50,
): Promise<EmployeesResponse> {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const queryParams = new URLSearchParams();
  if (employee_id) queryParams.append('employee_id', employee_id);

  if (department_id) queryParams.append('department_id', department_id);

  if (organization_id) queryParams.append('organization_id', organization_id);

  queryParams.append('page', page.toString());
  queryParams.append('size', size.toString());

  const response = await fetch(
    API.ADDR + API.ENDPOINTS.get_employees + '?' + queryParams.toString(),
    requestOptions,
  );

  if (!response.ok)
    throw new Error('Status code: ' + response.status.toString());

  const json: EmployeesResponse = await response.json();

  return json;
}
