/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import { Table } from '../ui/table';
import { Header } from './header';
import { Body } from './body';
import { User } from '@/types/api/user';
import { hasDifferentValues } from '@/lib/has-different-values';
import { getDifferentValues } from '@/lib/get-different-values';
import { GetOrganizationTree } from '@/api/get-organization-tree';
import { generateBreadcrumbs } from '@/lib/generate-breadcrumbs';
import { cn } from '@/lib/utils';

export async function TableWrapper({
  items,
  className,
}: {
  items: User[];
  className?: string;
}) {
  const orgTree = await GetOrganizationTree();

  // if (hasDifferentValues(items, 'DepartmentID')) {
  //   const orgTree = await GetOrganizationTree();
  //   return [...getDifferentValues(items, 'DepartmentID')].map(value => (
  //     <div key={value}>
  //       <div className='text-center bg-secondary/75 text-foreground'>
  //         {generateBreadcrumbs(value, orgTree).at(-1)?.name}
  //       </div>
  //       <Table>
  //         <Header />
  //         <Body
  //           items={items.filter(item => item.DepartmentID === value)}
  //           organizations={orgTree}
  //         />
  //       </Table>
  //     </div>
  //   ));
  // } else
  return (
    <Table>
      <Header />
      <Body items={items} organizations={orgTree} />
    </Table>
  );
}
