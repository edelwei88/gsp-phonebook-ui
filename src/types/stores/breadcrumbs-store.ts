import { BreadcrumbsItem } from '@/types/components/breadcrumbs';

type BreadcrumbsState = {
  breadcrumbs: BreadcrumbsItem[];
};

type BreadcrumbsActions = {
  setBreadcrumbs: (items: BreadcrumbsItem[]) => void;
  clearBreadcrumbs: () => void;
};

type BreadcrumbsStore = BreadcrumbsState & BreadcrumbsActions;

export type { BreadcrumbsStore, BreadcrumbsState, BreadcrumbsActions };
