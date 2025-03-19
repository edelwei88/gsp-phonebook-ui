'use client';

import { useState, useEffect } from 'react';
import { Item } from '@/lib/types/hierarchy';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { BreadcrumbsItem } from '@/lib/types/breadcrumbs';
import { useGlobalStore } from '@/lib/stores/globalStore';
import { cn } from '@/lib/utils';

function generateBreadcrumbs(items: Item[], id: string) {
  const result: BreadcrumbsItem[] = [];

  function recursiveSearch(items: Item[]): boolean {
    const goal: BreadcrumbsItem | undefined = items
      .map(item => ({
        id: item.id,
        name: item.name,
      }))
      .find(item => item.id === id);

    if (goal !== undefined) {
      result.unshift(goal);
      return true;
    }
    const toProcess: Item[] = items.filter(item => item.children.length > 0);
    if (toProcess.length === 0) {
      return false;
    }
    let toRet = false;
    toProcess.forEach(item => {
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
  return props.items.map(item => (
    <div key={item.id} className={'ml-[20px] relative' + props.className}>
      <div className='flex items-center relative'>
        <div
          className='size-7'
          onClick={() => {
            if (props.openedIds.find(id => item.id === id)) {
              props.setOpenedIds(props.openedIds.filter(el => el !== item.id));
            } else {
              props.setOpenedIds([...props.openedIds, item.id]);
            }
          }}>
          {item.children.length > 0 &&
            (props.openedIds.find(id => item.id === id) ? (
              <ChevronDown className='cursor-pointer dark:text-aliceblue' />
            ) : (
              <ChevronRight className='dark:text-aliceblue cursor-pointer' />
            ))}
        </div>

        <span
          onClick={() => {
            props.setSelectedIdAndBreadcrumbs(item.id);
          }}
          className={cn(
            item.id === props.selectedId
              ? 'text-blue-400 select-none'
              : 'text-black dark:text-aliceblue select-none cursor-pointer',
            'text-lg',
          )}>
          {item.name}
        </span>
      </div>
      {item.children?.length > 0 &&
        props.openedIds.find(id => item.id === id) && (
          <Slave {...{ ...props, items: item.children }} />
        )}
    </div>
  ));
}

export function Hierarchy() {
  const selectedId = useGlobalStore(state => state.selectedId);
  const setSelectedIdAndBreadcrumbs = useGlobalStore(
    state => state.setSelectedIdAndBreadcrumbs,
  );
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/hierarchy');
      const data: Item[] = await res.json();
      setAllItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className='mt-5 ml-5 flex flex-col gap-1'>
      <Slave
        items={allItems}
        openedIds={openedIds}
        setOpenedIds={setOpenedIds}
        setSelectedIdAndBreadcrumbs={(id: string) => {
          setSelectedIdAndBreadcrumbs(id, generateBreadcrumbs(allItems, id));
        }}
        selectedId={selectedId}
      />
    </div>
  );
}
