"use client";

import { useState, useContext, useEffect } from "react";
import { ContextType } from "@/lib/types/context";
import { AppContext } from "@/components/context/appContext";
import { Item } from "@/lib/types/hierarchy";
import { IValue } from "@/lib/types/context";

import { ChevronRight, ChevronDown } from "lucide-react";
import { BreadcrumbsItem } from "@/lib/types/breadcrumbs";

interface SlaveProps {
  items: Item[];
  openedIds: string[];
  setOpenedIds: (ids: string[]) => void;
  value: IValue;
  setIdAndBreadcrumbs: (id: string) => void;
  className?: string;
}

function Slave(props: SlaveProps) {
  return props.items.map((item) => (
    <div key={item.id} className={"ml-[20px] relative " + props.className}>
      <div className="flex items-center relative">
        <span
          onClick={() => {
            if (props.openedIds.find((id) => item.id === id)) {
              props.setOpenedIds(
                props.openedIds.filter((el) => el !== item.id),
              );
            } else {
              props.setOpenedIds([...props.openedIds, item.id]);
            }
          }}
        >
          {item.children.length > 0 &&
            (props.openedIds.find((id) => item.id === id) ? (
              <ChevronDown />
            ) : (
              <ChevronRight />
            ))}
        </span>

        <span
          onClick={() => {
            props.setIdAndBreadcrumbs(item.id);
          }}
          className={
            item.id === props.value.selectedId ? "text-blue-400" : "text-black"
          }
        >
          {item.name}
        </span>
      </div>
      {item.children?.length > 0 &&
        props.openedIds.find((id) => item.id === id) && (
          <Slave {...{ ...props, items: item.children }} />
        )}
    </div>
  ));
}

interface HierarchyProps {
  className?: string;
}

function generateBreadcrumbs(items: Item[], id: string) {
  const result: BreadcrumbsItem[] = [];

  function recursiveSearch(items: Item[]): boolean {
    const goal: BreadcrumbsItem | undefined = items
      .map((item) => ({
        id: item.id,
        name: item.name,
      }))
      .find((item) => item.id === id);

    if (goal !== undefined) {
      result.unshift(goal);
      return true;
    }

    const toProcess: Item[] = items.filter((item) => item.children.length > 0);

    if (toProcess.length === 0) {
      return false;
    }

    let toRet = false;
    toProcess.forEach((item) => {
      if (recursiveSearch(item.children) === true) {
        result.unshift({
          id: item.id,
          name: item.name,
        });
        toRet = true;
      }
    });

    return toRet;
  }

  recursiveSearch(items);
  return result;
}

export function Hierarchy(props: HierarchyProps) {
  const { value, setIdAndBreadcrumbs } = useContext(AppContext) as ContextType;
  const [allItems, setItems] = useState<Item[]>([]);
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/hierarchy");
      const data: Item[] = await res.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <Slave
      items={allItems}
      openedIds={openedIds}
      setOpenedIds={setOpenedIds}
      setIdAndBreadcrumbs={(id: string) => {
        setIdAndBreadcrumbs(id, generateBreadcrumbs(allItems, id));
      }}
      value={value}
      className={props.className}
    />
  );
}
