"use client";

import { AppContext } from "../context/appContext";
import { ContextType } from "@/lib/types/context";

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
import { useContext } from "react";

export function Breadcrumbs({ className }: { className?: string }) {
  const { value, setBreadcrumbs } = useContext(AppContext) as ContextType;

  const list = value.breadcrumbs;
  const length = list.length;

  if (length === 0) {
    return <></>;
  }

  return value.breadcrumbs.length > 3 ? (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Button
              variant="link"
              onClick={() => {
                setBreadcrumbs(list.slice(0, 1));
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
              {list.slice(1, -2).map((item, i) => (
                <DropdownMenuItem key={item.id}>
                  <Button
                    variant="link"
                    onClick={() => {
                      setBreadcrumbs(list.slice(0, i + 2));
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
                setBreadcrumbs(list.slice(0, length - 1));
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
                    setBreadcrumbs(list.slice(0, i + 1));
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
