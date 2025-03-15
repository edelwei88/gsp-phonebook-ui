'use client';
import { Pagination } from '@/components/gsp/pagination';
import { Breadcrumbs } from '@/components/gsp/breadcrumbs';
import { BreadcrumbsItem } from '@/components/gsp/breadcrumbs';

import { useState } from 'react';

const bcItems: BreadcrumbsItem[] = [
  {
    id: 'bc1',
    name: 'bc1',
  },
  {
    id: 'bc2',
    name: 'bc2',
  },
  {
    id: 'bc3',
    name: 'bc3',
  },
  {
    id: 'bc4',
    name: 'bc4',
  },
  {
    id: 'bc5',
    name: 'bc5',
  },
];

const bcItemsNew: BreadcrumbsItem[] = [
  {
    id: 'bc1',
    name: 'bc1',
  },
  {
    id: 'bc2',
    name: 'bc2',
  },
  {
    id: 'bc3',
    name: 'bc3',
  },
];

export default function Page() {
  const [bc, setBc] = useState<BreadcrumbsItem[]>(bcItems);

  return (
    <Breadcrumbs
      breadcrumbs={bc}
      breadcrumbClickHandler={(id) => {
        alert(id);
        setBc(bcItemsNew);
      }}
    />
  );
}
