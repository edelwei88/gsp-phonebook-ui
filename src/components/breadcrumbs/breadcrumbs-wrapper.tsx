'use client';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs-store';
import { Breadcrumbs } from './breadcrumbs';

export function BreadcrumbsWrapper() {
  const breadcrumbs = useBreadcrumbsStore(state => state.breadcrumbs);

  return <Breadcrumbs items={breadcrumbs} />;
}
