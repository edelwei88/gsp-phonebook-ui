'use client';
import { DropdownMenuProps } from '@/types/components/breadcrumbs';
import { BreadcrumbItem, BreadcrumbEllipsis } from '@/components/ui/breadcrumb';
import {
  DropdownMenu as DropdownMenuPlain,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { setActiveBreadcrumb } from '@/stores/mock';

export function DropdownMenu({ items }: DropdownMenuProps) {
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
                  setActiveBreadcrumb(value.id);
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
