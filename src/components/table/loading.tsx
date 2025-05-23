import { TABLE } from '@/consts/table';
import { Skeleton } from '../ui/skeleton';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Header } from './header';

export function LoadingState() {
  return (
    <div className='rounded-[15px] overflow-y-scroll'>
      <Table>
        <Header />
        <TableBody>
          {[...Array(TABLE.SIZE)].map((_, index) => (
            <TableRow key={index}>
              {[...Array(4)].map((_, index) => (
                <TableCell key={index}>
                  <Skeleton className='w-full h-14' />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
