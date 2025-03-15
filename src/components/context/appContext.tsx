"use client";

import { useState, createContext } from "react";
import { IValue, ContextType } from "@/lib/types/context";
import { BreadcrumbsItem } from "@/lib/types/breadcrumbs";

export const AppContext = createContext<ContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<IValue>({
    page: 1,
    maxPage: 300,
    selectedId: null,
    breadcrumbs: [
      {
        id: "id1",
        name: "name1",
      },
      {
        id: "id2",
        name: "name2",
      },
      {
        id: "id3",
        name: "name3",
      },
      {
        id: "id4",
        name: "name4",
      },
      {
        id: "id5",
        name: "name5",
      },
    ],
  });

  function setPage(page: number) {
    const newValue: IValue = {
      ...value,
      page: page,
    };
    setValue(newValue);
  }

  function setMaxPage(page: number) {
    const newValue: IValue = {
      ...value,
      maxPage: page,
    };
    setValue(newValue);
  }

  function setId(id: string | null) {
    const newValue: IValue = {
      ...value,
      selectedId: id,
    };
    setValue(newValue);
  }

  function setBreadcrumbs(breadcrumbs: BreadcrumbsItem[]) {
    const newValue: IValue = {
      ...value,
      breadcrumbs: breadcrumbs,
    };
    setValue(newValue);
  }

  return (
    <AppContext.Provider
      value={{ value, setPage, setMaxPage, setId, setBreadcrumbs }}
    >
      {children}
    </AppContext.Provider>
  );
}
