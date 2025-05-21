import { User } from '../api/user';

type SearchSelectProps = {
  classname?: string;
  onSelectChange(value: 'name' | 'phone' | 'email'): void;
};

type HintProps = {
  users: User[];
  hasSearched: boolean;
  onMouseDown(bool: boolean): void;
};

export type { SearchSelectProps, HintProps };
