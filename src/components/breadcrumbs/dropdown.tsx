'use client';
import { BreadcrumbsProps } from '@/types/components/breadcrumbs';
import { BreadcrumbItem, BreadcrumbEllipsis } from '@/components/ui/breadcrumb';
import {
  DropdownMenu as DropdownMenuPlain,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs-store';

export function DropdownMenu({ items }: BreadcrumbsProps) {
  const breadcrumbs = useBreadcrumbsStore(state => state.breadcrumbs);
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);
  if (items.length === 0) return null;

  return (
    <BreadcrumbItem>
      <DropdownMenuPlain>
        <DropdownMenuTrigger className='flex items-center gap-1'>
          <BreadcrumbEllipsis className='h-4 w-4' />
          <span className='sr-only'>Открыть меню</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map(value => (
            <DropdownMenuItem key={value.id}>
              <Button
                variant='link'
                size='default'
                onClick={() => {
                  setBreadcrumbs(
                    breadcrumbs.slice(0, breadcrumbs.indexOf(value) + 1),
                  );
                }}>
                {value.name}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPlain>
    </BreadcrumbItem>
  );
}
