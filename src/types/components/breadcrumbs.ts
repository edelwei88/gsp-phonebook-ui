type BreadcrumbsItem = {
  id: string;
  name: string;
};

type BreadcrumbItemProps = {
  item: BreadcrumbsItem;
  active: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbsItem[];
};

export type { BreadcrumbItemProps, BreadcrumbsProps, BreadcrumbsItem };
