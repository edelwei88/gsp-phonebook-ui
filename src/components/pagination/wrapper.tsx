import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { generatePages } from '@/lib/generate-pages';
import { routeGen } from '@/lib/route-gen';

export function Pagination({
  currentPage,
  maxPage,
  department_id,
  organization_id,
}: {
  currentPage: number;
  maxPage: number;
  department_id: string;
  organization_id: string;
}) {
  if (maxPage < 2) return null;

  const pages = generatePages(currentPage, maxPage);

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            prefetch={true}
            href={routeGen(department_id, organization_id, currentPage - 1)}
            isActive={currentPage > 1}
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>

        {pages.map(value => (
          <PaginationItem key={value}>
            <PaginationLink
              prefetch={true}
              href={routeGen(department_id, organization_id, value)}
              className={currentPage === value ? 'font-bold' : ''}>
              {value}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            prefetch={true}
            href={routeGen(department_id, organization_id, currentPage + 1)}
            isActive={!(currentPage === maxPage)}
            className={
              currentPage === maxPage ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
}
