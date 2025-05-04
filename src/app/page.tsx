import { Breadcrumbs } from '@/components/breadcrumbs/wrapper';
import SearchBar from '@/components/searchbar/SearchBar';
import { SidebarDemo } from '@/components/sidebar/Sidebar';
import { Item } from '@/types/components/breadcrumbs';

const testData: Item[] = [
  {
    id: '1',
    name: 'name1',
  },
  {
    id: '2',
    name: 'name2',
  },
  {
    id: '3',
    name: 'name3',
  },
  {
    id: '4',
    name: 'name4',
  },
  {
    id: '5',
    name: 'name5',
  },
  {
    id: '6',
    name: 'name6',
  },
  {
    id: '7',
    name: 'name7',
  },
  {
    id: '8',
    name: 'name8',
  },
];
export default function Page() {
  return (
    <div className=''>
      <Breadcrumbs items={testData} />
      <SearchBar />
      <div className='my-5'>
        <SidebarDemo />
      </div>
    </div>
  );
}
