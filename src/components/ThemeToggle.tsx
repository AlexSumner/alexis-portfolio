"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="rounded-lg border px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
      onClick={() => setDark((v) => !v)}
      aria-label="Cambiar tema"
    >
      {dark ? "☾" : "☀"}
    </button>
  );
}
