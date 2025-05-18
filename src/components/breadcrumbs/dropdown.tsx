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
import { useHierarchyStore } from '@/stores/hierarchy-store';
import { useRouter } from 'next/navigation';
import { routeGen } from '@/lib/route-gen';
import { ChevronRight } from 'lucide-react';

export function DropdownMenu({ items }: BreadcrumbsProps) {
  const breadcrumbs = useBreadcrumbsStore(state => state.breadcrumbs);
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);
  const setSelectedId = useHierarchyStore(state => state.setSelectedId);
  const router = useRouter();
  if (items.length === 0) return null;

  return (
    <BreadcrumbItem>
      <DropdownMenuPlain>
        <DropdownMenuTrigger className='flex items-center gap-4'>
          <BreadcrumbEllipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {items.map((value, index) => (
            <DropdownMenuItem key={value.id} className='cursor-pointer'>
              <Button
                className='hover:no-underline cursor-pointer'
                variant='link'
                size='default'
                onClick={() => {
                  const newBreadcrumbs = breadcrumbs.slice(
                    0,
                    breadcrumbs.indexOf(value) + 1,
                  );
                  setBreadcrumbs(newBreadcrumbs);
                  setSelectedId(newBreadcrumbs.at(-1)?.id || '');
                  if (newBreadcrumbs.length > 1) {
                    router.push(routeGen(value.id, breadcrumbs[0].id, 1));
                  } else {
                    router.push(routeGen(null, value.id, 1));
                  }
                }}
              >
                {[...Array(index)].map((_, i) => (
                  <ChevronRight key={i} />
                ))}
                {value.name}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPlain>
    </BreadcrumbItem>
  );
}
