"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/appContext";
import { ContextType } from "@/lib/types/context";

export interface Item {
  id: string;
  name: string;
  opened: boolean;
  children: Item[];
}

function Chevron({ opened, onClick }: { opened: boolean; onClick(): void }) {
  return (
    <span
      onClick={(e: React.MouseEvent<HTMLInputElement>) => {
        onClick();
        e.stopPropagation();
      }}
    >
      {opened ? <ChevronDown /> : <ChevronRight />}
    </span>
  );
}

export interface HierarchyProps {
  className?: string;
  items?: Item[];
}

function SlaveRender({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const { value, setId } = useContext(AppContext) as ContextType;

  if (items.length === 0) {
    return <></>;
  }

  return items.map((item) => (
    <div key={item.id} className={`ml-[20px] relative ${className}`}>
      <div
        onClick={() => {
          setId(item.id);
        }}
        className={`
            relative  flex  items-center select-none
            ${item.children.length > 0 ? "cursor-pointer" : "cursor-default"}
            ${item.id === value.selectedId ? "text-blue-400" : "text-black"}
            `}
      >
        {item.children && (
          <Chevron
            opened={item.opened}
            onClick={() => {
              item.opened = !item.opened;
            }}
          />
        )}
        {item.name}
      </div>
      {item.children.length > 0 &&
        item.opened &&
        SlaveRender({ items: item.children, className })}
    </div>
  ));
}

export function Hierarchy(props: HierarchyProps) {
  const { value, setId } = useContext(AppContext) as ContextType;
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (props.items) {
        setItems(props.items);
        return;
      }
      const res = await fetch("/hierarchy");
      const data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []);

  if (items.length === 0) {
    return <></>;
  }

  return items.map((item) => (
    <div key={item.id} className={`ml-[20px] relative ${props.className}`}>
      <div
        className={`
          relative  flex  items-center select-none
          ${item.children.length > 0 ? "cursor-pointer" : "cursor-default"}
          ${item.id === value.selectedId ? "text-blue-400" : "text-black"}
          `}
      >
        {item.children && (
          <Chevron
            opened={item.opened}
            onClick={() => {
              item.opened = !item.opened;
            }}
          />
        )}
        <span
          onClick={() => {
            setId(item.id);
          }}
        >
          {item.name}
        </span>
      </div>
      {item.children.length > 0 &&
        item.opened &&
        Hierarchy({ items: item.children, className: props.className })}
    </div>
  ));
}
