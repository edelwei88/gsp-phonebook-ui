import { GetEmployees } from '@/api/get-employees';
import { Search } from '@/api/search';
import { GetOrganizationTree } from '@/api/get-organization-tree';
import { Pagination, PaginationSearch } from '@/components/pagination/wrapper';
import { TableWrapper } from '@/components/table/wrapper';
import { TABLE } from '@/consts/table';
import { Suspense } from 'react';
import { LoadingState } from '@/components/table/loading';

async function PageWrapper({
  value,
  attribute,
  department_id,
  organization_id,
  page,
}: {
  value: string;
  attribute: string;
  department_id: string;
  organization_id: string;
  page: number;
}) {
  let json;
  let search = false;

  if (value && attribute) {
    json = await Search(value, attribute, page, TABLE.SIZE);
    search = true;
  } else {
    json = await GetEmployees(
      null,
      department_id,
      organization_id,
      page,
      TABLE.SIZE,
    );
  }

  return (
    <div className='h-[calc(100vh-170px)] rounded-[15px]'>
      <div className='flex-1 overflow-y-auto rounded-[15px]'>
        <TableWrapper items={json.items} className='overflow-y-scroll' />
      </div>
      <div className='sticky bottom-0 bg-card z-10 h-10 rounded-[15px]'>
        {search ? (
          <PaginationSearch
            className='h-full'
            currentPage={json.page}
            maxPage={json.pages}
            value={value}
            attribute={attribute}
          />
        ) : (
          <Pagination
            className='h-full'
            currentPage={json.page}
            maxPage={json.pages}
            department_id={department_id}
            organization_id={
              organization_id
                ? organization_id
                : (await GetOrganizationTree())[0].ID
            }
          />
        )}
      </div>
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    value: string;
    attribute: string;
    department_id: string;
    organization_id: string;
    page: number;
  }>;
}) {
  const { value, attribute, department_id, organization_id, page } =
    await searchParams;

  return (
    <Suspense
      fallback={<LoadingState />}
      key={JSON.stringify({ ...(await searchParams) })}
    >
      <PageWrapper
        value={value}
        attribute={attribute}
        department_id={department_id}
        organization_id={organization_id}
        page={page}
      />
    </Suspense>
  );
}
