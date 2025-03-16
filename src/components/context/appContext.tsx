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
    breadcrumbs: [],
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

  function setIdAndBreadcrumbs(
    id: string | null,
    breadcrumbs: BreadcrumbsItem[],
  ) {
    const newValue: IValue = {
      ...value,
      breadcrumbs: breadcrumbs,
      selectedId: id,
    };
    setValue(newValue);
  }

  return (
    <AppContext.Provider
      value={{ value, setPage, setMaxPage, setIdAndBreadcrumbs }}
    >
      {children}
    </AppContext.Provider>
  );
}
