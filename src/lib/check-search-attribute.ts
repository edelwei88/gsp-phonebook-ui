export function checkSearchAttribute(value: string): boolean {
  const attributes = ['phone', 'email', 'name'];
  return attributes.includes(value);
}
