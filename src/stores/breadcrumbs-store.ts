import { create } from 'zustand';
import {
  BreadcrumbsState,
  BreadcrumbsStore,
} from '@/types/stores/breadcrumbs-store';

const defaultInitState: BreadcrumbsState = {
  breadcrumbs: [],
};

export const createBreadcrumbsStore = create<BreadcrumbsStore>(set => ({
  ...defaultInitState,
  assign: items =>
    set(() => ({
      breadcrumbs: items,
    })),
  clear: () =>
    set(() => ({
      breadcrumbs: [],
    })),
}));
