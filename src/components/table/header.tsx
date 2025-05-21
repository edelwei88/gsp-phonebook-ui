'use server';
import { TableHead, TableHeader, TableRow } from '../ui/table';

export async function Header({ ...props }: React.ComponentProps<'thead'>) {
  const values = ['ФИО', 'Должность', 'Почта', 'Телефон'];

  return (
    <TableHeader {...props}>
      <TableRow>
        <TableHead className='pl-3'>{values[0]}</TableHead>
        <TableHead className='text-center'>{values[1]}</TableHead>
        <TableHead>{values[2]}</TableHead>
        <TableHead>{values[3]}</TableHead>
      </TableRow>
    </TableHeader>
  );
}
