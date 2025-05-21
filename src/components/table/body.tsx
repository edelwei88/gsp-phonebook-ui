'use client';

import { TableBodyProps } from '@/types/components/table';
import { TableBody } from '../ui/table';
import { Row } from './row';
import { Organization } from '@/types/components/organization';

export function Body({
  items,
  organizations,
  ...props
}: React.ComponentProps<'tbody'> &
  TableBodyProps & { organizations: Organization[] }) {
  return (
    <TableBody {...props}>
      {items.map(value => (
        <Row
          key={value.ID}
          user={value}
          organizations={organizations}
          onClick={() => {
            alert(value.ID);
          }}
        />
      ))}
    </TableBody>
  );
}
