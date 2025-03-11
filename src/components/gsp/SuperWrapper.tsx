"use client";
import { useState } from "react";
import EmployeeTableWrapper from "@/components/gsp/employeeTableWrapper";
import HierarchyBlock from "@/components/gsp/HierarchyBlock";
import PaginationParent from "@/components/gsp/PaginationParent";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "@/components/gsp/searchBar";
import { Button } from "@/components/ui/button";
import {Item, Payload, User} from '@/components/types/types'

export default function SuperWrapper({ dataWithUniqueIds, payload, pages, cur} : {dataWithUniqueIds:Item[], payload:Payload, pages:number, cur:number}) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="flex flex-col items-center mx-[30px] w-full">
      <div className="w-full bg-alice items-center rounded-[15px] px-[30px] h-[50px] flex mb-[20px]">
        <Breadcrumb className="my-auto">
          <BreadcrumbList className="text-[17px]">
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
      <div className="w-full mb-[10px] h-[60px] flex flex-row items-center gap-[15px]">
        <SearchBar className="bg-uran rounded-[15px] w-full h-full shadow-none border-none text-[17px]" />
        <Button className="w-[150px] h-full text-[18px] rounded-[15px] bg-celestial text-jet border-none shadow-none hover:bg-azul">
          Найти
        </Button>
      </div>

      <div className="flex flex-row gap-5 w-full h-[70vh]">
        <div
          className={`flex flex-col bg-alice rounded-[15px] h-[75vh] transition-all duration-300 ${
            isExpanded ? "w-1/3" : "w-0 p-0"
          }`}
        >
          <HierarchyBlock
            dataWithUniqueIds={dataWithUniqueIds}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="flex w-full h-[70vh] border rounded-[15px]">
            <EmployeeTableWrapper users={payload.items} />
          </div>
          <div className="mt-4">
            <PaginationParent maxPage={pages} cur={cur}/>
          </div>
        </div>
      </div>
    </div>
  );
}
