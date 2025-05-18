export function getDifferentValues<TObj extends object, K extends keyof TObj>(
  arr: TObj[],
  key: K,
): Set<TObj[K]> {
  return new Set(arr.map(item => item[key]));
}
