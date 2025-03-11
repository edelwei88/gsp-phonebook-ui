"use client";

import React from "react";
import Logo from "@/components/gsp/Logo";
import QuestionMark from "@/components/gsp/QuestionMark";
import ThemeChanger from "./ThemeChanger";
import Logout from "./Logout";
import Link from "next/link";

function questionMarkClickHandle() {}

function themeChangerClickHandle() {}

function logoutClickHandle() {}

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={`flex justify-between ${className}`}>
      <div className="flex items-center space-x-4">
        <Link href={"/"} className="text-xl font-bold">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={questionMarkClickHandle}
          className="bg-white text-blue-600 px-4 py-2 rounded-[35px] hover:bg-blue-50"
        >
          <QuestionMark />
        </button>
        <button
          onClick={themeChangerClickHandle}
          className="bg-white text-blue-600 px-4 py-2 rounded-[35px] hover:bg-blue-50"
        >
          <ThemeChanger />
        </button>
        <button
          onClick={logoutClickHandle}
          className="bg-white text-blue-600 px-4 py-2 rounded-[35px] hover:bg-blue-50"
        >
          <Logout />
        </button>
      </div>
    </header>
  );
}
