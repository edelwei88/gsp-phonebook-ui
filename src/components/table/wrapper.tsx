'use server';
import { Table } from '../ui/table';
import { Header } from './header';
import { Body } from './body';
import { User } from '@/types/api/user';
import { hasDifferentValues } from '@/lib/has-different-values';
import { getDifferentValues } from '@/lib/get-different-values';
import { GetOrganizationTree } from '@/api/get-organization-tree';
import { generateBreadcrumbs } from '@/lib/generate-breadcrumbs';

export async function TableWrapper({ items }: { items: User[] }) {
  if (hasDifferentValues(items, 'DepartmentID')) {
    const orgTree = await GetOrganizationTree();
    return [...getDifferentValues(items, 'DepartmentID')].map(value => (
      <div key={value}>
        <div className='text-center bg-secondary/75 text-foreground'>
          {generateBreadcrumbs(value, orgTree).at(-1)?.name}
        </div>
        <Table>
          <Header />
          <Body items={items.filter(item => item.DepartmentID === value)} />
        </Table>
      </div>
    ));
  } else
    return (
      <Table>
        <Header />
        <Body items={items} />
      </Table>
    );
}
