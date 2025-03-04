import Navbar from "@/components/gsp/Navbar";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { InputSearch } from "@/components/ui/input-search";
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Sb from "@/components/ui/sb";
import { MagnifyingGlassIcon as SearchIcon } from "@radix-ui/react-icons";


export default async function Page({
  params,
}: {
  params: Promise<{ page: Number }>
}) {
  const { page } = await params
  const API = 'http://89.111.155.239:8000/get_employees';
  const data = await fetch(`${API}?page=${page}&size=20`);
  const users = await data.json();
  return (
    <div className='flex flex-col items-center mx-[30px]'>
      <div className="w-full">
        <Navbar />
      </div>
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
        <InputSearch type='search' icon={SearchIcon} iconProps={{ behavior: 'prepend', className: 'h-6 w-6 stroke-jet stroke-1' }} className='bg-uran rounded-[15px] w-full shadow-none border-none text-[17px]' />
        <Button className="w-[150px] h-full text-[18px] rounded-[15px] bg-celestial text-jet border-none shadow-none hover:bg-azul">Найти</Button>
      </div>
      <div className="flex flex-row w-full h-full">
      <Sb/>
      <div className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <Table>
          <TableHeader>
            <TableRow className='bg-columbia'>
              <TableHead className='rounded-tl-[15px] text-center text-jet'>ФИО</TableHead>
              <TableHead className="text-center text-jet">Должность</TableHead>
              <TableHead className="text-center text-jet">Почта</TableHead>
              <TableHead className='rounded-tr-[15px] text-center text-jet'>Телефон</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.items.map((user: any) => (
              <TableRow key={user.ID} >
                <TableCell>{user.FullNameRus}</TableCell>
                <TableCell>{user.Workplace}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>({user.Phone.substring(0, 2)}) {user.Phone.substring(2, 4)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={`/home/${users.page - 1}`} className={users.page === 1 ? "pointer-events-none" : ""} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/home/${users.page}`}>
                {users.page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`/home/${users.page + 1}`} className={users.page === users.pages ? "pointer-events-none" : ""} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      </div>
      </div>
    </div >
  );
}
