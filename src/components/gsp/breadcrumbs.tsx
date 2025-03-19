'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';

import { useGlobalStore } from '@/lib/stores/globalStore';
import { BREADCRUMBS } from '@/lib/globalConsts/breadcrumbs';
import { Fragment, ReactNode } from 'react';
import { cn } from '@/lib/utils';

function StyledSpan({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className={cn('cursor-pointer select-none', className)}>
      {children}
    </span>
  );
}

export function Breadcrumbs({ className }: { className?: string }) {
  const breadcrumbs = useGlobalStore(state => state.breadcrumbs);
  const length = breadcrumbs.length;
  const setSelectedIdAndBreadcrumbs = useGlobalStore(
    state => state.setSelectedIdAndBreadcrumbs,
  );

  function clickHandler(id: string | undefined, elementIndex: number) {
    const idToSet = id === undefined ? null : id;
    setSelectedIdAndBreadcrumbs(
      idToSet,
      breadcrumbs.slice(0, elementIndex + 1),
    );
  }

  if (length === 0) {
    return;
  }

  return length > BREADCRUMBS.THRESHOLD ? (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <StyledSpan onClick={() => clickHandler(breadcrumbs[0].id, 0)}>
              {breadcrumbs[0].name}
            </StyledSpan>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className='cursor-pointer dark:hover:text-white hover:text-black'>
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start'>
              {breadcrumbs.slice(1, -2).map((item, i) => (
                <DropdownMenuItem
                  className='cursor-pointer'
                  key={item.id}
                  onClick={() => clickHandler(breadcrumbs[i + 1].id, i + 1)}>
                  <StyledSpan>{item.name}</StyledSpan>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <StyledSpan
              onClick={() => clickHandler(breadcrumbs.at(-2)?.id, length - 2)}>
              {breadcrumbs[length - 2].name}
            </StyledSpan>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage>
            <span>{breadcrumbs[length - 1].name}</span>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ) : (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.slice(0, -1).map((item, i) => (
          <Fragment key={item.id}>
            <BreadcrumbItem key={item.id}>
              <BreadcrumbLink asChild>
                <StyledSpan onClick={() => clickHandler(breadcrumbs[i].id, i)}>
                  {item.name}
                </StyledSpan>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
          </Fragment>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{breadcrumbs[length - 1].name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
