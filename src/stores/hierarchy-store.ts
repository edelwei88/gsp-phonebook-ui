import { HierarchyState, HierarchyStore } from '@/types/stores/hierarchy-store';
import { create } from 'zustand';

const defaultInitState: HierarchyState = {
  selectedId: '',
  openedIds: [],
};

export const createBreadcrumbsStore = create<HierarchyStore>(set => ({
  ...defaultInitState,
  assignSelectedId: id =>
    set(() => ({
      selectedId: id,
    })),
  clearSelectedId: () =>
    set(() => ({
      selectedId: '',
    })),
  assignOpenedIds: ids =>
    set(() => ({
      openedIds: ids,
    })),
  clearOpenedIds: () =>
    set(() => ({
      openedIds: [],
    })),
}));
