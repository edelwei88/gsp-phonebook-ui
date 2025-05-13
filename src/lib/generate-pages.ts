export function generatePages(currentPage: number, maxPage: number): number[] {
  const pages: number[] = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(maxPage, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}
