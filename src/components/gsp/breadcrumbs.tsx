"use client";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronRight } from "lucide-react";

export interface BreadcrumbsItem {
  id: string;
  name: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbsItem[];
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const list = props.breadcrumbs;
  const length = props.breadcrumbs.length;

  return length > 3 ? (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${list[0].id}`}>{list[0].name}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {list.slice(1, -2).map((item) => (
                <DropdownMenuItem key={item.id}>
                  <Link href={`/${item.id}`}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${list[length - 2].id}`}>
              {list[length - 2].name}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage>{list[length - 1].name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ) : (
    <Breadcrumb>
      <BreadcrumbList>
        {list.map((item, i) =>
          i !== length - 1 ? (
            <>
              <BreadcrumbItem key={item.id}>
                <BreadcrumbLink asChild>
                  <Link href={`/${item.id}`}>{item.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight />
              </BreadcrumbSeparator>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            </BreadcrumbItem>
          ),
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
