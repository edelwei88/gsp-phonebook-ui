"use client";

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { ContextType } from "@/lib/types/context";

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
  const { value, setPage } = useContext(AppContext) as ContextType;

  return (
    <PaginationRoot className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              setPage(value.page - 1);
            }}
            isActive={value.page > 1 ? true : false}
            className={value.page === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {generatePages(value.page, value.maxPage).map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              onClick={() => {
                setPage(item);
              }}
              className={value.page == item ? "font-bold" : ""}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              setPage(value.page + 1);
            }}
            isActive={value.page === value.maxPage ? false : true}
            className={
              value.page === value.maxPage
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
}
