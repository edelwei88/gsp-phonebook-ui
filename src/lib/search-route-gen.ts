export function searchRouteGen(
  value: string,
  attribute: string,
  page = 1,
): string {
  const queryParams = new URLSearchParams();
  queryParams.append('value', value);
  queryParams.append('attribute', attribute);
  queryParams.append('page', page.toString());

  return '/phonebook?' + queryParams.toString();
}
