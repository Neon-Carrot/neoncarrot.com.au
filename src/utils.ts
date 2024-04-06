export function truncateString(str: string, length: number) {
  if (str.length > length) {
    return str.slice(0, length - 1) + "…";
  }
  return str;
}

export function getOrdinalDate(num: number) {
  if (num > 3 && num < 21) return "th";
  switch (num % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
