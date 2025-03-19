import { Breadcrumbs } from '@/components/gsp/breadcrumbs';
import { ClearSelection } from '@/components/gsp/clearSelection';
import HierarchyTable from '@/components/gsp/hierarchyTable';
import SearchBar from '@/components/gsp/searchbar/customSearchBar';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className='flex flex-col'>
      <Breadcrumbs />
      <div className='flex flex-row mb-3 rounded-[15px] items-center justify-evenly gap-2'>
        <div className='flex flex-col w-7/8'>
          <SearchBar />
        </div>
        <div className='flex flex-col w-1/8'>
          <Button className='bg-azul text-white w-full h-[50px] rounded-[15px] hover:bg-uran hover:text-black dark:bg-azul dark:text-aliceblue'>
            Найти
          </Button>
        </div>
      </div>
      <HierarchyTable />
    </div>
  );
}
