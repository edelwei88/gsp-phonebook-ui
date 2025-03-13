"use client";

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
import { Button } from "../ui/button";

export interface BreadcrumbsItem {
  id: string;
  name: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbsItem[];
  breadcrumbClickHandler(breadcrumbId: string): void;
  className?: string;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const list = props.breadcrumbs;
  const length = props.breadcrumbs.length;

  return length > 3 ? (
    <Breadcrumb className={props.className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Button
              variant="link"
              onClick={() => {
                props.breadcrumbClickHandler(list[0].id);
              }}
            >
              {list[0].name}
            </Button>
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
                  <Button
                    variant="link"
                    onClick={() => {
                      props.breadcrumbClickHandler(item.id);
                    }}
                  >
                    {item.name}
                  </Button>
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
            <Button
              variant="link"
              onClick={() => {
                props.breadcrumbClickHandler(list[length - 2].id);
              }}
            >
              {list[length - 2].name}
            </Button>
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
        {list.slice(0, -1).map((item, i) => (
          <div key={item.id} className="inline-flex items-center">
            <BreadcrumbItem key={item.id}>
              <BreadcrumbLink asChild>
                <Button
                  variant="link"
                  onClick={() => {
                    props.breadcrumbClickHandler(item.id);
                  }}
                >
                  {item.name}
                </Button>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
          </div>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{list[length - 1].name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
