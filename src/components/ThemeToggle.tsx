"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex items-center space-x-4">
      <button onClick={toggleTheme} className="py-1 px-1 rounded">
        {theme === "light" && <Moon />}
        {theme === "dark" && <Sun />}
      </button>
    </div>
  );
};

export default ThemeToggle;
