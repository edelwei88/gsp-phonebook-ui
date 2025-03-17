"use client";

import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { useGlobalStore } from "@/lib/stores/globalStore";
import { Users } from "@/app/search/route";

export function Table() {
  const items = useGlobalStore((state) => state.items);
  const setItems = useGlobalStore((state) => state.setItems);
  const page = useGlobalStore((state) => state.page);
  const setMaxPage = useGlobalStore((state) => state.setMaxPage);
  const selectedId = useGlobalStore((state) => state.selectedId);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `/users?page=${page}&organization_id=${selectedId}`,
      );
      const json: Users = await data.json();
      setItems(json.items);
      setMaxPage(json.pages);
    }
    fetchData();
  }, [selectedId, page]);

  console.log(items);
  return (
    <TableRoot>
      <TableHeader className="bg-columbia dark:bg-davysgray">
        <TableRow>
          <TableHead className="text-white">ФИО</TableHead>
          <TableHead className="text-white">Должность</TableHead>
          <TableHead className="text-white">Почта</TableHead>
          <TableHead className="text-white">Телефон</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.ID}>
            <TableCell>{item.FullNameRus}</TableCell>
            <TableCell>{item.Workplace}</TableCell>
            <TableCell>{item.Email}</TableCell>
            <TableCell>{item.Phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableRoot>
  );
}
