'use client';
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; 

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {theme === "light" ? (
        <Sun size={24} className="text-black dark:text-aliceblue" /> 
      ) : (
        <Moon size={24} className="text-black dark:text-aliceblue" /> 
      )}
    </div>
  );
};

export default ThemeChanger;