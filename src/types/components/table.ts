import { User } from '../api/user';
import { Organization } from './organization';

type TableRowProps = {
  user: User;
  onClick(): void;
  organizations: Organization[];
};

type TableBodyProps = {
  items: User[];
  organizations: Organization[];
};

export type { TableRowProps, TableBodyProps };
