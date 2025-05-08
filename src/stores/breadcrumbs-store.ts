import { create } from 'zustand';
import {
  BreadcrumbsState,
  BreadcrumbsStore,
} from '@/types/stores/breadcrumbs-store';

const defaultInitState: BreadcrumbsState = {
  breadcrumbs: [],
};

export const useBreadcrumbsStore = create<BreadcrumbsStore>(set => ({
  ...defaultInitState,
  setBreadcrumbs: items =>
    set(() => ({
      breadcrumbs: items,
    })),
  clearBreadcrumbs: () =>
    set(() => ({
      breadcrumbs: [],
    })),
}));
