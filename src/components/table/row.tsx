'use client';
import { TableRowProps } from '@/types/components/table';
import { TableCell, TableRow } from '../ui/table';

export function Row({
  name,
  occupation,
  email,
  phoneNumber,
  onClick,
  ...props
}: React.ComponentProps<'tr'> & TableRowProps) {
  return (
    <TableRow
      {...props}
      onClick={() => {
        onClick();
      }}>
      <TableCell>{name}</TableCell>
      <TableCell>{occupation}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
    </TableRow>
  );
}
