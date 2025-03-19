"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/gsp/svg/Logo";
import QuestionMark from "@/components/gsp/svg/QuestionMark";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import HelpModal from "./helpModal";

export function Navbar({ className }: { className?: string }) {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  const openHelpModal = () => setIsHelpModalOpen(true);
  const closeHelpModal = () => setIsHelpModalOpen(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className={`flex justify-between ${className}`}>
      <div className="flex items-center space-x-4">
        <Link href={"/"} className="text-xl font-bold">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className=" text-blue-600 px-4 py-2 rounded-[35px] hover:bg-blue-50 dark:hover:bg-davysgray"
          onClick={openHelpModal}
        >
          <QuestionMark />
        </button>
        <button
          className="text-blue-600 px-4 py-2 rounded-[35px] hover:bg-blue-50 dark:hover:bg-davysgray cursor-pointer"
          onClick={handleClick}
        >
          {theme === "light" ? (
            <Sun size="24" className="text-black dark:text-aliceblue" />
          ) : (
            <Moon size="24" className="text-black dark:text-aliceblue" />
          )}
        </button>
      </div>
      <HelpModal isOpen={isHelpModalOpen} onClose={closeHelpModal} />
    </header>
  );
}

