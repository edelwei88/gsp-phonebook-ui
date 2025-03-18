"use client";

import { useRef } from "react";
import { Table } from "./table";
import { Hierarchy } from "./hierarchy";
import { Pagination } from "./pagination";
import { ChevronRight } from "lucide-react";

export default function HierarchyTable() {
  const visible = useRef<boolean>(true);

  function handleClick() {
    if (visible) {
    }
  }

  return (
    <div className="flex flex-row gap-5 min-h-[75vh]">
      {isHierarchyVisible && (
        <div
          className={`flex flex-col w-1/3 bg-alice dark:bg-onyx p-2 rounded-[15px] relative ease-in-out ${
            isHierarchyVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <Hierarchy
            isVisible={isHierarchyVisible}
            onClose={() => {
              setIsHierarchyVisible(false);
            }}
          />
        </div>
      )}

      <div className="flex flex-col w-full bg-alice dark:bg-onyx dark:text-aliceblue rounded-[15px] overflow-hidden ease-in-out">
        <Table />
        <Pagination className="my-3" />
      </div>

      {!isHierarchyVisible && (
        <button
          onClick={() => {
            setIsHierarchyVisible(true);
          }}
          className="fixed top-[50%] left-[-5px] p-2 bg-blue-500 text-white rounded-r-[15px] ease-in-out"
        >
          <ChevronRight className="  ease-in-out" />
        </button>
      )}
    </div>
  );
}
