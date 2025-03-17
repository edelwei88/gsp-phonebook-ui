"use client";

import { useState, useEffect } from "react";
import { Item } from "@/lib/types/hierarchy";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import { BreadcrumbsItem } from "@/lib/types/breadcrumbs";
import { useGlobalStore } from "@/lib/stores/globalStore";

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

interface SlaveProps {
  items: Item[];
  selectedId: string | null;
  openedIds: string[];
  setOpenedIds: (ids: string[]) => void;
  setSelectedIdAndBreadcrumbs: (id: string) => void;
  className?: string;
}

function Slave(props: SlaveProps) {
  return props.items.map((item) => (
    <div key={item.id} className={"ml-[20px] relative" + props.className}>
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
              <ChevronDown className="dark:text-aliceblue" />
            ) : (
              <ChevronRight className="dark:text-aliceblue"/>
            ))}
        </span>

        <span
          onClick={() => {
            props.setSelectedIdAndBreadcrumbs(item.id);
          }}
          className={
            item.id === props.selectedId ? "text-blue-400 dark:text-alicblue" : "text-black dark:text-aliceblue"
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
  isVisible: boolean; 
  onClose: () => void;
}

export function Hierarchy({ className, isVisible, onClose }: HierarchyProps) {
  const selectedId = useGlobalStore((state) => state.selectedId);
  const setSelectedIdAndBreadcrumbs = useGlobalStore(
    (state) => state.setSelectedIdAndBreadcrumbs,
  );
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/hierarchy");
      const data: Item[] = await res.json();
      setAllItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <button
        onClick={onClose}
        className="absolute z-100 top-2 right-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
      >
        <X className="h-5 w-5 text-gray-600" />
      </button>

      <Slave
        items={allItems}
        openedIds={openedIds}
        setOpenedIds={setOpenedIds}
        setSelectedIdAndBreadcrumbs={(id: string) => {
          setSelectedIdAndBreadcrumbs(id, generateBreadcrumbs(allItems, id));
        }}
        selectedId={selectedId}
        className={className}
      />
    </>
  );
}