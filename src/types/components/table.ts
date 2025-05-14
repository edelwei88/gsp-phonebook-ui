import { User } from '../api/user';

type TableRowProps = {
  name: string;
  occupation: string;
  email: string;
  phoneNumber: string;
  onClick(): void;
};

type TableBodyProps = {
  items: User[];
};

export type { TableRowProps, TableBodyProps };
