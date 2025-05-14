import { GetEmployees } from '@/api/get-employees';
import { Pagination } from '@/components/pagination/wrapper';
import { TableWrapper } from '@/components/table/wrapper';
import { TABLE } from '@/consts/table';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    department_id: string;
    organization_id: string;
    page: number;
  }>;
}) {
  const data = await searchParams;
  const json = await GetEmployees(
    null,
    data.department_id,
    data.organization_id,
    data.page,
    TABLE.SIZE,
  );
  return (
    <div>
      <TableWrapper items={json.items} />
      <Pagination
        currentPage={json.page}
        maxPage={json.pages}
        department_id={data.department_id}
        organization_id={data.organization_id}
      />
    </div>
  );
}
