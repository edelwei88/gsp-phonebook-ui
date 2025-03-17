"use client";

import { useState } from "react";
import { Table } from "./table";
import { Hierarchy } from "./hierarchy";
import { Pagination } from "./pagination";
import { ChevronRight } from "lucide-react";

export default function HierarchyTable() {
  const [isHierarchyVisible, setIsHierarchyVisible] = useState(true);
  const [isHierarchyRendered, setIsHierarchyRendered] = useState(true); 

  const handleCloseHierarchy = () => {
    setIsHierarchyVisible(false);

    setTimeout(() => {
      setIsHierarchyRendered(false); 
    }, 5); 
  };

  const handleShowHierarchy = () => {
    setIsHierarchyRendered(true); 
    setTimeout(() => {
      setIsHierarchyVisible(true); 
    }, 5); 
  };

  return (
    <div className="flex flex-row gap-5 min-h-[75vh]">
      {isHierarchyRendered && (
        <div
          className={`flex flex-col w-1/3 bg-alice dark:bg-charcoal p-2 rounded-[20px] relative transition-all duration-500 ease-in-out ${
            isHierarchyVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
          style={{
            display: isHierarchyVisible ? "block" : "none", 
          }}
        >
          <Hierarchy
            isVisible={isHierarchyVisible}
            onClose={handleCloseHierarchy}
          />
        </div>
      )}

      <div className="flex flex-col w-full bg-alice dark:bg-charcoal dark:text-aliceblue rounded-[20px] overflow-hidden transition-all duration-500 ease-in-out">
        <Table />
        <Pagination className="my-3" />
      </div>

      {!isHierarchyRendered && (
        <button
          onClick={handleShowHierarchy}
          className="fixed top-[50%] left-[-5px] p-2 bg-blue-500 text-white rounded-r-[20px] transition-all duration-500 ease-in-out"
        >
          <ChevronRight className="transition-all duration-500 ease-in-out"/>
        </button>
      )}
    </div>
  );
}