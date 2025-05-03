type Item = {
  id: string;
  name: string;
};

type BreadcrumbItemProps = {
  item: Item;
  active?: boolean;
};

type DropdownMenuProps = {
  items: Item[];
};

type BreadcrumbsProps = {
  items: Item[];
};

export type { BreadcrumbItemProps, DropdownMenuProps, BreadcrumbsProps, Item };
