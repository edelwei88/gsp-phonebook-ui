"use client";
import { useState } from "react";
import CustomPagination from "./Pagination";
import { PaginationProps } from "./Pagination";

export default function PaginationBlock({
  currentPage: CurrentPage,
  maxPage
}: PaginationProps) {

  return (
    <div className="">
      <CustomPagination
        currentPage={CurrentPage}
        maxPage={maxPage}
      />
    </div>
  );
}
