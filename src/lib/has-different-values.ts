export function hasDifferentValues<TObj extends object>(
  arr: TObj[],
  key: keyof TObj,
): boolean {
  const values = new Set(arr.map(item => item[key]));
  return values.size > 1;
}
