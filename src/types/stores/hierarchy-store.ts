type HierarchyState = {
  selectedId: string;
  openedIds: string[];
};

type HierarchyActions = {
  assignSelectedId: (id: string) => void;
  clearSelectedId: () => void;
  assignOpenedIds: (ids: string[]) => void;
  clearOpenedIds: () => void;
};

type HierarchyStore = HierarchyState & HierarchyActions;

export type { HierarchyStore, HierarchyState, HierarchyActions };
