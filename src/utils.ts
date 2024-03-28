export function truncateString(str: string, length: number) {
  if (str.length > length) {
    return str.slice(0, length - 1) + "…";
  }
  return str;
}
