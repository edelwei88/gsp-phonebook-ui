'use client';

import { TableBodyProps } from '@/types/components/table';
import { TableBody } from '../ui/table';
import { Row } from './row';

export function Body({
  items,
  ...props
}: React.ComponentProps<'tbody'> & TableBodyProps) {
  return (
    <TableBody {...props}>
      {items.map(value => (
        <Row
          key={value.ID}
          name={value.FullNameRus}
          occupation={value.Workplace}
          phoneNumber={value.Phone}
          email={value.Email}
          onClick={() => {
            alert(value.ID);
          }}
        />
      ))}
    </TableBody>
  );
}
