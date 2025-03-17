import { create } from "zustand";
import { BreadcrumbsItem } from "../types/breadcrumbs";
import { User } from "../types/user";

interface GlobalStore {
  page: number;
  maxPage: number;
  selectedId: string | null;
  breadcrumbs: BreadcrumbsItem[];
  setPage: (page: number) => void;
  setMaxPage: (maxPage: number) => void;
  setSelectedIdAndBreadcrumbs: (
    selectedId: string | null,
    breadcrumbs: BreadcrumbsItem[],
  ) => void;
  items: User[];
  total: number;
  size: number;
  setItems: (items: User[]) => void;
  setTotal: (total: number) => void;
  setSize: (size: number) => void;
  usingSearch: boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useGlobalStore = create<GlobalStore>((set, state) => ({
  page: 1,
  maxPage: 625,
  selectedId: null,
  breadcrumbs: [],
  setPage: (page: number) => {
    set(() => ({
      page: page,
    }));
  },
  setMaxPage: (maxPage: number) => {
    set(() => ({
      maxPage: maxPage,
    }));
  },
  setSelectedIdAndBreadcrumbs: (
    selectedId: string | null,
    breadcrumbs: BreadcrumbsItem[],
  ) => {
    set(() => ({
      selectedId: selectedId,
      breadcrumbs: breadcrumbs,
      page: 1,
    }));
  },
  items: [],
  total: 0,
  size: 16,
  setItems: (items) => {
    set(() => ({
      items: items,
    }));
  },
  setTotal: (total) => {
    set(() => ({
      total: total,
    }));
  },
  setSize: (size) => {
    set(() => ({
      size: size,
    }));
  },
  usingSearch: false,
  theme: typeof window !== "undefined" ? (localStorage.getItem("theme") === "dark" ? "dark" : "light") : "light",
  toggleTheme: () => {
    console.log("Тема переключается");
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light"; 
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      console.log("Новая тема:", newTheme); 
      return { theme: newTheme }; 
    });
  },
}));