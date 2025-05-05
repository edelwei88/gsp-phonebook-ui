'use client';
import { BreadcrumbItemProps } from '@/types/components/breadcrumbs';
import {
  BreadcrumbItem as BreadcrumbItemPlain,
  BreadcrumbLink,
  BreadcrumbPage,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
// import { setActiveBreadcrumb } from '@/stores/mock';

export function BreadcrumbItem({
  item,
  active = false,
  className,
  ...props
}: React.ComponentProps<'li'> & BreadcrumbItemProps) {
  if (active)
    return (
      <BreadcrumbItemPlain {...props} className={cn(className)}>
        <BreadcrumbLink asChild>
          <Button
            variant='link'
            size='default'
            onClick={() => {
              // setActiveBreadcrumb(item.id);
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
