import { BreadcrumbsItem } from "./breadcrumbs";

export interface IValue {
  page: number;
  maxPage: number;
  selectedId: string | null;
  breadcrumbs: BreadcrumbsItem[];
}

export interface ContextType {
  value: IValue;
  setPage: (page: number) => void;
  setMaxPage: (page: number) => void;
  setId: (id: string | null) => void;
  setBreadcrumbs: (breadcrumbs: BreadcrumbsItem[]) => void;
}
