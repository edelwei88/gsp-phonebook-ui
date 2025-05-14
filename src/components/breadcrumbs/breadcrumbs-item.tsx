'use client';
import { BreadcrumbItemProps } from '@/types/components/breadcrumbs';
import {
  BreadcrumbItem as BreadcrumbItemPlain,
  BreadcrumbLink,
  BreadcrumbPage,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs-store';
import { useRouter } from 'next/navigation';
import { routeGen } from '@/lib/route-gen';
import { useHierarchyStore } from '@/stores/hierarchy-store';

export function BreadcrumbItem({
  item,
  active = false,
  className,
  ...props
}: React.ComponentProps<'li'> & BreadcrumbItemProps) {
  const breadcrumbs = useBreadcrumbsStore(state => state.breadcrumbs);
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);
  const setSelectedId = useHierarchyStore(state => state.setSelectedId);
  const router = useRouter();

  if (active)
    return (
      <BreadcrumbItemPlain {...props} className={cn(className)}>
        <BreadcrumbLink asChild>
          <Button
            className='hover:no-underline cursor-pointer'
            variant='link'
            size='default'
            onClick={() => {
              const newBreadcrumbs = breadcrumbs.slice(
                0,
                breadcrumbs.indexOf(item) + 1,
              );
              setBreadcrumbs(newBreadcrumbs);
              setSelectedId(newBreadcrumbs.at(-1)?.id || '');
              if (newBreadcrumbs.length > 1) {
                router.push(routeGen(item.id, breadcrumbs[0].id, 1));
              } else {
                router.push(routeGen(null, item.id, 1));
              }
            }}>
            {item.name}
          </Button>
        </BreadcrumbLink>
      </BreadcrumbItemPlain>
    );
  else
    return (
      <BreadcrumbItemPlain {...props} className={cn(className)}>
        <BreadcrumbPage className='px-4 py-2'>
          <BreadcrumbPage>{item.name}</BreadcrumbPage>
        </BreadcrumbPage>
      </BreadcrumbItemPlain>
    );
}
