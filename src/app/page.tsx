import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MagnifyingGlassIcon as SearchIcon } from "@radix-ui/react-icons";

const data = await fetch('http://89.111.155.239:8000/get_employees');
const users = await data.json();

export default async function Page() {
  return (
    <div className='flex flex-col items-center mx-[30px]'>
      <div className='w-full bg-alice rounded-[15px] px-[30px] h-[50px] flex mb-[20px]'>
        <Breadcrumb className="my-auto">
          <BreadcrumbList className='text-[17px]'>
            <BreadcrumbItem>
              <BreadcrumbLink>Исполнительный аппарат</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>1</DropdownMenuItem>
                  <DropdownMenuItem>2</DropdownMenuItem>
                  <DropdownMenuItem>3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Департамент учета и отчетности</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='w-full mb-[10px] h-[60px] flex flex-row items-stretch gap-[15px]'>
        <Input type='search' icon={SearchIcon} iconProps={{ behavior: 'prepend', className: 'h-6 w-6 stroke-jet stroke-1' }} placeholder='Placeholder' className='bg-uran rounded-[15px] w-full shadow-none border-none text-[17px]' />
        <Button className="w-[150px] h-full text-[18px] rounded-[15px] bg-celestial text-jet border-none shadow-none">Найти</Button>
      </div>
      <div className="w-full h-full">
        <Table>
          <TableHeader>
            <TableRow className='bg-columbia'>
              <TableHead className='rounded-tl-[15px] text-center text-jet'>ФИО</TableHead>
              <TableHead className="text-center text-jet">Должность</TableHead>
              <TableHead className="text-center text-jet">Префикс</TableHead>
              <TableHead className='rounded-tr-[15px] text-center text-jet'>Телефон</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.items.map((user: any) => (
              <TableRow key={user.ID} >
                <TableCell>{user.FullNameRus}</TableCell>
                <TableCell>{user.Workplace}</TableCell>
                <TableCell>{user.Phone.substring(0, 2)}</TableCell>
                <TableCell>{user.Phone.substring(2, 4)}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  );
}
