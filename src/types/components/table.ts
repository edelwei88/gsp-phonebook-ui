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

type TableWrapperProps = {
  department_id: string | null;
  organization_id: string;
  page: number;
};

export type { TableRowProps, TableBodyProps, TableWrapperProps };
