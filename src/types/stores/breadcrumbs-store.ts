import { BreadcrumbsItem } from '@/types/components/breadcrumbs';

type BreadcrumbsState = {
  breadcrumbs: BreadcrumbsItem[];
};

type BreadcrumbsActions = {
  assign: (items: BreadcrumbsItem[]) => void;
  clear: () => void;
};

type BreadcrumbsStore = BreadcrumbsState & BreadcrumbsActions;

export type { BreadcrumbsStore, BreadcrumbsState, BreadcrumbsActions };
