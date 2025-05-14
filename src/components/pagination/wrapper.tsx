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
import { searchRouteGen } from '@/lib/search-route-gen';

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

export function PaginationSearch({
  currentPage,
  maxPage,
  value,
  attribute,
}: {
  currentPage: number;
  maxPage: number;
  value: string;
  attribute: string;
}) {
  if (maxPage < 2) return null;

  const pages = generatePages(currentPage, maxPage);

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            prefetch={true}
            href={searchRouteGen(value, attribute, currentPage - 1)}
            isActive={currentPage > 1}
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>

        {pages.map(item => (
          <PaginationItem key={item}>
            <PaginationLink
              prefetch={true}
              href={searchRouteGen(value, attribute, item)}
              className={currentPage === item ? 'font-bold' : ''}>
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            prefetch={true}
            href={searchRouteGen(value, attribute, currentPage + 1)}
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
