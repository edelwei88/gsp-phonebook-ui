"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const check_cookies = async () => {
  const cookieStore = await cookies();
  const authenticated = cookieStore.get("authenticated");
  if (authenticated && authenticated.value == "true") redirect("/home/1");
  else return;
};

export const set_cookies = async () => {
  const cookieStore = await cookies();
  cookieStore.set("authenticated", "true", {
    httpOnly: true,
    secure: false,
    maxAge: 2500000,
  });
  redirect("/home/1");
};
