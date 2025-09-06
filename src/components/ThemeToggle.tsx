"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className="rounded-lg border border-violet-200 px-3 py-2 text-sm hover:bg-violet-100 dark:border-violet-800 dark:hover:bg-violet-900"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
    >
      {resolvedTheme === "dark" ? "☾" : "☀"}
    </button>
  );
}
