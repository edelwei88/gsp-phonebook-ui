import { HierarchyState, HierarchyStore } from '@/types/stores/hierarchy-store';
import { create } from 'zustand';

const defaultInitState: HierarchyState = {
  selectedId: '',
  openedIds: [],
};

export const useHierarchyStore = create<HierarchyStore>(set => ({
  ...defaultInitState,
  setSelectedId: id =>
    set(() => ({
      selectedId: id,
    })),
  clearSelectedId: () =>
    set(() => ({
      selectedId: '',
    })),
  setOpenedIds: ids =>
    set(() => ({
      openedIds: ids,
    })),
  clearOpenedIds: () =>
    set(() => ({
      openedIds: [],
    })),
}));
