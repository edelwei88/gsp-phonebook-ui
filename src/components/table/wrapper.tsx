'use server';
import { GetEmployees } from '@/api/get-employees';
import { TableWrapperProps } from '@/types/components/table';
import { Table } from '../ui/table';
import { Header } from './header';
import { Body } from './body';
import { TABLE } from '@/consts/table';

export async function TableWrapper({
  department_id = null,
  organization_id,
  page,
}: TableWrapperProps) {
  const data = await GetEmployees(
    null,
    department_id,
    organization_id,
    page,
    TABLE.SIZE,
  );

  return (
    <Table>
      <Header />
      <Body items={data.items} />
    </Table>
  );
}
