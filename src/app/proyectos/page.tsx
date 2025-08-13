import Link from "next/link";
import { PROYECTOS } from "@/data/proyectos";

export const dynamic = "force-static";

export default function ProyectosPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-semibold mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {PROYECTOS.map((p) => (
          <Link
            key={p.slug}
            href={`/proyectos/${p.slug}`}
            className="group rounded-2xl border p-5 transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{p.titulo}</h2>
            <p className="mt-2 text-sm opacity-80">{p.resumen}</p>
            <div className="mt-3 text-xs opacity-70">{p.techs.join(" · ")}</div>
            <div className="mt-4 text-blue-600 group-hover:underline">
              Ver detalles →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
