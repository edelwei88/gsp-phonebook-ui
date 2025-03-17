import { User } from "@/lib/types/user";
import { NextRequest, NextResponse } from "next/server";

export interface Users {
  items: User[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const searhParams = url.searchParams;
  const value = searhParams.get("value");
  const attribute = searhParams.get("attribute");
  const size = 16;

  const response = await fetch(
    `http://89.111.155.239:8000/search?attribute=${attribute}&value=${value}&size=${size}`,
  );
  const data = (await response.json()) as Users;

  return NextResponse.json(data);
}
