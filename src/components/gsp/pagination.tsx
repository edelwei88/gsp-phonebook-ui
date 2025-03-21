"use client";

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGlobalStore } from "@/lib/stores/globalStore";

function generatePages(currentPage: number, maxPage: number): number[] {
  const pages: number[] = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(maxPage, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}

export function Pagination({ className }: { className?: string }) {
  const page = useGlobalStore((state) => state.page);
  const maxPage = useGlobalStore((state) => state.maxPage);
  const setPage = useGlobalStore((state) => state.setPage);

  if (maxPage === 0 || maxPage === 1) {
    return <></>;
  }

  return (
    <PaginationRoot className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              setPage(page - 1);
            }}
            isActive={page > 1 ? true : false}
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {generatePages(page, maxPage).map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              onClick={() => {
                setPage(item);
              }}
              className={page == item ? "font-bold" : ""}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              setPage(page + 1);
            }}
            isActive={page === maxPage ? false : true}
            className={page === maxPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
}
