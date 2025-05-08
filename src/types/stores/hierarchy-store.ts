type HierarchyState = {
  selectedId: string;
  openedIds: string[];
};

type HierarchyActions = {
  setSelectedId: (id: string) => void;
  clearSelectedId: () => void;
  setOpenedIds: (ids: string[]) => void;
  clearOpenedIds: () => void;
};

type HierarchyStore = HierarchyState & HierarchyActions;

export type { HierarchyStore, HierarchyState, HierarchyActions };
