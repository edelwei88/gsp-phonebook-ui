"use client";
import { useState } from "react";
import PaginationBlock from "./PaginationBlock";

export default function PaginationParent({ maxPage, cur }: { maxPage: number, cur: number}) {
  
  console.log(maxPage);
  return (
    <div className="">
      <PaginationBlock
        currentPage={cur}
        maxPage={maxPage}
      />
    </div>
  );
}
