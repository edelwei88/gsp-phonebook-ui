export const dynamic = "force-static";

import { Item } from "@/lib/types/hierarchy";

interface Tree {
  ID: string;
  Name: string;
  Children: Tree[];
}

function unique(arr: Tree[]): Tree[] {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const flags: any = [];
  const result = arr.filter((item) => {
    if (flags[item.ID]) {
      return false;
    }
    flags[item.ID] = true;
    return true;
  });

  return result;
}

function processData(arr: Tree[]): Item[] {
  const result: Item[] = [];

  arr.forEach((item) => {
    result.push({
      id: item.ID,
      name: item.Name,
      children: item.Children.length === 0 ? [] : processData(item.Children),
    });
  });

  return result;
}

export async function GET() {
  const res = await fetch("http://89.111.155.239:8000/get_organization_tree");
  const data: Tree[] = await res.json();

  return Response.json(processData(unique(data)));
}
