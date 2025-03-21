import { Breadcrumbs } from '@/components/gsp/breadcrumbs';
import HierarchyTable from '@/components/gsp/hierarchyTable';
import CustomSearchBar from '@/components/gsp/searchbar/customSearchBar';

export default function Page() {
  return (
    <div className='flex flex-col'>
      <Breadcrumbs />
      <div className='flex flex-row mb-3 rounded-[15px] items-center justify-evenly gap-2'>
        <CustomSearchBar />
      </div>
      <HierarchyTable />
    </div>
  );
}
