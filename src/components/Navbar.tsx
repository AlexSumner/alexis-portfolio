import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-200/50 bg-violet-50/50 shadow-sm shadow-violet-200/50 backdrop-blur-lg dark:border-violet-800/50 dark:bg-violet-950/50 dark:shadow-violet-800/50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between py-3">
        <Link href="/" className="font-bold tracking-tight">
          Alexis Araujo
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/proyectos" className="hover:underline">
            Proyectos
          </Link>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
          <Link href="/IA">IA</Link>
          <a
            href="/CV_Alexis_Araujo_Desarrollador.pdf"
            className="hover:underline"
            download
          >
            CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
