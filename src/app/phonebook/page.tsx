import { GetEmployees } from '@/api/get-employees';
import { Search } from '@/api/search';
import { GetOrganizationTree } from '@/api/get-organization-tree';
import { Pagination, PaginationSearch } from '@/components/pagination/wrapper';
import { TableWrapper } from '@/components/table/wrapper';
import { TABLE } from '@/consts/table';

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

  if (search) {
    return (
      <div>
        <TableWrapper items={json.items} />
        <PaginationSearch
          currentPage={json.page}
          maxPage={json.pages}
          value={value}
          attribute={attribute}
        />
      </div>
    );
  } else {
    return (
      <div>
        <TableWrapper items={json.items} />
        <Pagination
          currentPage={json.page}
          maxPage={json.pages}
          department_id={department_id}
          organization_id={
            organization_id
              ? organization_id
              : (await GetOrganizationTree())[0].ID
          }
        />
      </div>
    );
  }
}
