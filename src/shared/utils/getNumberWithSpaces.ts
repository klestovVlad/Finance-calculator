export function getNumberWithSpaces(x?: number | string): string {
  if (!x) {
    return '';
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
