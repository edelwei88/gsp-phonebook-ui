import { BreadcrumbsItem } from '@/types/components/breadcrumbs';

export interface BreadcrumbsState {
  breadcrumbs: BreadcrumbsItem[];
  assign: (items: BreadcrumbsItem[]) => void;
  clear: () => void;
}
