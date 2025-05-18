import { User } from '../api/user';

type TableRowProps = {
  user: User;
  onClick(): void;
};

type TableBodyProps = {
  items: User[];
};

export type { TableRowProps, TableBodyProps };
