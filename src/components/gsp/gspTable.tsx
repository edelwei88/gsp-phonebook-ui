import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export interface TableItem {
  index: Number;
  id: string;
  fullNameRus: string;
  departmentId: string;
  organizationId: string;
  boleet: Number;
  email: string;
  photo: string;
  phone: string;
  mobile: string;
  address: string;
  workplace: string;
}

export interface TableProps {
  data: TableItem[];
  departmentName?: string;
  className?: string;
}

export function GspTable(props: TableProps) {
  return (
    <Table>
      <TableHeader>
        {props.departmentName !== null && (
          <TableRow>
            <TableHead>{props.departmentName}</TableHead>
          </TableRow>
        )}
        <TableRow>
          <TableHead>ФИО</TableHead>
          <TableHead>Должность</TableHead>
          <TableHead>Почта</TableHead>
          <TableHead>Телефон</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.fullNameRus}</TableCell>
            <TableCell>{item.workplace}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
