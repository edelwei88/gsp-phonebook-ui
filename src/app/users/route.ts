import { NextRequest, NextResponse } from "next/server";
import { Users } from "../search/route";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  searchParams.append("size", "16");
  if (searchParams.get("organization_id") == "null") {
    searchParams.delete("organization_id");
  }

  const response = await fetch(
    `http://89.111.155.239:8000/get_employees?${searchParams.toString()}`,
  );
  const data = (await response.json()) as Users;

  return NextResponse.json(data);
}
