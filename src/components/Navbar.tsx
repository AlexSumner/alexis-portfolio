import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold tracking-tight">
          Alexis Araujo
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/proyectos" className="hover:underline">
            Proyectos
          </Link>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
          <a
            href="/CV_Alexis_Araujo_Desarrollador.pdf"
            className="hover:underline"
            download
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
