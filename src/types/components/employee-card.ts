import { TreeItem } from '../api/tree-item';
import { User } from '../api/user';
import { Organization } from './organization';

type EmployeeCardProps = {
  isOpen: boolean;
  onClose: () => void;
  employee: User | null;
  organizations?: Organization[];
};

export type { EmployeeCardProps };
