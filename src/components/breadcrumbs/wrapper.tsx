import { BreadcrumbsProps } from '@/types/components/breadcrumbs';
import { BREADCRUMBS } from '@/consts/breadcrumbs';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { BreadcrumbItem } from './item';
import { Fragment } from 'react';
import { DropdownMenu } from '@/components/breadcrumbs/dropdown';

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;
  const toDisplayDropdown = items.length > BREADCRUMBS.ITEMS_TO_DISPLAY;

  if (toDisplayDropdown) {
    const dropdown = (
      <Fragment>
        <BreadcrumbSeparator />
        <DropdownMenu items={items.slice(1, -2)} />
      </Fragment>
    );
    const breadcrumbsAfter = items.slice(-2).map((value, index, array) => (
      <Fragment key={value.id}>
        <BreadcrumbSeparator />
        <BreadcrumbItem item={value} active={index !== array.length} />
      </Fragment>
    ));

    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem active item={items[0]} />
          {dropdown}
          {breadcrumbsAfter}
        </BreadcrumbList>
      </Breadcrumb>
    );
  } else {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((value, index) => (
            <Fragment key={value.id}>
              {index !== 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem
                item={value}
                active={index !== items.length - 1}
              />
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
}
