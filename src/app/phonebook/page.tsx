import { TableWrapper } from '@/components/table/wrapper';

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
  return (
    <TableWrapper
      department_id={data.department_id}
      organization_id={data.organization_id}
      page={data.page}
    />
  );
}
