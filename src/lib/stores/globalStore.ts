import { create } from 'zustand';
import { BreadcrumbsItem } from '../types/breadcrumbs';
import { User } from '../types/user';

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
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
  isSearching: boolean;
  setIsSearching: (flag: boolean) => void;
  searchData: {
    attribute: string;
    value: string;
  };
  setSearchData: (av: { attribute: string; value: string }) => void;
}

export const useGlobalStore = create<GlobalStore>(set => ({
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
  size: 20,
  setItems: items => {
    set(() => ({
      items: items,
    }));
  },
  setTotal: total => {
    set(() => ({
      total: total,
    }));
  },
  setSize: size => {
    set(() => ({
      size: size,
    }));
  },
  usingSearch: false,
  selectedUser: null,
  setSelectedUser: user => {
    set(() => ({
      selectedUser: user,
    }));
  },
  isSearching: false,
  setIsSearching: flag => {
    set(() => ({
      isSearching: flag,
    }));
  },
  searchData: {
    attribute: '',
    value: '',
  },
  setSearchData: av => {
    set(() => ({
      searchData: av,
    }));
  },
}));
