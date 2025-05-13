export function routeGen(
  department_id: string | null,
  organization_id: string,
  page = 1,
): string {
  const queryParams = new URLSearchParams();
  if (department_id) queryParams.append('department_id', department_id);
  queryParams.append('organization_id', organization_id);
  queryParams.append('page', page.toString());

  return '/phonebook?' + queryParams.toString();
}
