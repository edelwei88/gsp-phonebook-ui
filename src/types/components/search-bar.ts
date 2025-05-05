import { User } from '../api/user';

type SearchSelectProps = {
  classname?: string;
  onSelectChange(value: 'name' | 'phone' | 'email'): void;
};

type HintProps = {
  users: User[];
  hasSearched: boolean;
};

export type { SearchSelectProps, HintProps };
