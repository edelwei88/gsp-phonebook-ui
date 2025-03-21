import { User } from '@/lib/types/user';
import { NextRequest, NextResponse } from 'next/server';

export interface Users {
  items: User[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;

  const response = await fetch(
    `http://89.111.155.239:8000/search?${url.toString()}`,
  );
  const data = (await response.json()) as Users;

  return NextResponse.json(data);
}
