import { Breadcrumbs } from '@/components/gsp/breadcrumbs';
import { SearchBar } from '@/components/gsp/searchBar';
import type {
  BreadcrumbsProps,
  BreadcrumbsItem,
} from '@/components/gsp/breadcrumbs';

const test: BreadcrumbsItem[] = [
  {
    id: '1',
    name: 'asdf',
  },
  {
    id: '2',
    name: 'asdf',
  },
  {
    id: '3',
    name: 'asdf',
  },
  {
    id: '4',
    name: 'asdf',
  },
  {
    id: '5',
    name: 'asdf',
  },
];
export default function Home() {
  return (
    <div>
      <Breadcrumbs breadcrumbs={test} />
      <SearchBar />
    </div>
  );
}
