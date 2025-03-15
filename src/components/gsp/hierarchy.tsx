'use client';

import { useState } from 'react';

import { ChevronRight, ChevronDown } from 'lucide-react';

export interface Item {
  id: string;
  name: string;
  children?: Item[];
}

interface HierarchyItemProps {
  id: string;
  name: string;
  selected: boolean;
  opened: boolean;
  onClick(id: string): void;
  onClickChevron(id: string): void;
  className?: string;
}

function HierarchyItem(props: HierarchyItemProps) {
  return (
    <div
      onClick={() => {
        props.onClick(props.id);
      }}
      className={`flex items-center relative ${props.selected && 'text-blue-400'} `}
    >
      <span
        onClick={() => {
          props.onClickChevron(props.id);
        }}
      >
        {props.opened ? <ChevronDown /> : <ChevronRight />}
      </span>
      {props.name}
    </div>
  );
}

interface HierarchyProps {
  items: Item[];
  selectedItem: string | null;
  onClick(id: string): void;
  className?: string;
}

export function Hierarchy(props: HierarchyProps) {}
