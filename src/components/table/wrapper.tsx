'use server';
import { Table } from '../ui/table';
import { Header } from './header';
import { Body } from './body';
import { User } from '@/types/api/user';

export async function TableWrapper({ items }: { items: User[] }) {
  return (
    <Table>
      <Header />
      <Body items={items} />
    </Table>
  );
}
