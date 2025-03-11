import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { redirect } from "next/navigation";
export interface PaginationProps {
  currentPage: number;
  maxPage: number;
}

export default function CustomPagination({
  currentPage,
  maxPage,
}: PaginationProps) {
  const getPageRange = () => {
    const range = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(maxPage, currentPage + 2);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <Pagination>
      <PaginationContent className="border rounded-[15px]">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) redirect(`/home?page=${currentPage - 1}`);
            }}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          >
            Назад
          </PaginationPrevious>
        </PaginationItem>

        {getPageRange().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                redirect(`/home?page=${page}`);
              }}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {maxPage > currentPage + 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < maxPage) redirect(`/home?page=${currentPage + 1}`);
            }}
            className={
              currentPage === maxPage ? "pointer-events-none opacity-50" : ""
            }
          >
            Вперед
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}