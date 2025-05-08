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

export function BreadcrumbItem({
  item,
  active = false,
  className,
  ...props
}: React.ComponentProps<'li'> & BreadcrumbItemProps) {
  const breadcrumbs = useBreadcrumbsStore(state => state.breadcrumbs);
  const setBreadcrumbs = useBreadcrumbsStore(state => state.setBreadcrumbs);

  if (active)
    return (
      <BreadcrumbItemPlain {...props} className={cn(className)}>
        <BreadcrumbLink asChild>
          <Button
            variant='link'
            size='default'
            onClick={() => {
              setBreadcrumbs(
                breadcrumbs.slice(0, breadcrumbs.indexOf(item) + 1),
              );
            }}>
            {item.name}
          </Button>
        </BreadcrumbLink>
      </BreadcrumbItemPlain>
    );
  else
    return (
      <BreadcrumbItemPlain {...props} className={cn(className)}>
        <BreadcrumbPage>
          <BreadcrumbPage>{item.name}</BreadcrumbPage>
        </BreadcrumbPage>
      </BreadcrumbItemPlain>
    );
}
