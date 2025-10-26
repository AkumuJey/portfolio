"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch (theme is undefined on first render)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="p-2 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
