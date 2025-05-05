type BreadcrumbsItem = {
  id: string;
  name: string;
};

type BreadcrumbItemProps = {
  item: BreadcrumbsItem;
  active: boolean;
};

type DropdownMenuProps = {
  items: BreadcrumbsItem[];
};

type BreadcrumbsProps = {
  items: BreadcrumbsItem[];
};

export type {
  BreadcrumbItemProps,
  DropdownMenuProps,
  BreadcrumbsProps,
  BreadcrumbsItem,
};
