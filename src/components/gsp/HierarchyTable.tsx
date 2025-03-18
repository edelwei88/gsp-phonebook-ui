"use client";

import { useRef } from "react";
import { Table } from "./table";
import { Hierarchy } from "./hierarchy";
import { Pagination } from "./pagination";

export default function HierarchyTable() {
  const hierarchyRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isVisible = useRef(true);

  const chevronLeftSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left ease-in-out">
      <path d="m15 18-6-6 6-6" />
    </svg>
  `;

  const chevronRightSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ease-in-out">
      <path d="m9 18 6-6-6-6" />
    </svg>
  `;

  const handleToggleHierarchy = () => {
    if (hierarchyRef.current && buttonRef.current) {
      hierarchyRef.current.classList.toggle("hidden");
      isVisible.current = !isVisible.current;
      
      if (isVisible.current) {
        buttonRef.current.innerHTML = chevronLeftSVG;
      } else {
        buttonRef.current.innerHTML = chevronRightSVG;
      }

    }
  };

  return (
    <div className="flex flex-row gap-5 min-h-[75vh]">
      <div
        ref={hierarchyRef}
        className="flex flex-col w-1/3 bg-alice dark:bg-onyx p-2 rounded-[15px] transition-all duration-300 ease-in-out"
      >
        <Hierarchy />
      </div>

      <div
        className="flex flex-col w-full bg-alice dark:bg-onyx dark:text-aliceblue rounded-[15px] overflow-hidden ease-in-out transition-all duration-300 w-2/3"
      >
        <Table />
        <Pagination className="my-3" />
      </div>

      <button
        ref={buttonRef}
        onClick={handleToggleHierarchy}
        className="fixed top-[50%] left-[-5px] p-2 bg-blue-500 text-white rounded-r-[15px] transition-all duration-300 ease-in-out"
      >
        <div dangerouslySetInnerHTML={{ __html: isVisible.current ? chevronLeftSVG : chevronRightSVG }} />
      </button>
    </div>
  );
}