import Link from "next/link";
import type { Metadata } from "next";
import Carousel from "@/components/Carousel";
import { getProyecto } from "@/data/proyectos";

type Params = { slug: string };

// ✅ Metadata tipada y esperando params (Next 15)
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProyecto(slug);
  return {
    title: p ? `${p.titulo} — Proyectos` : "Proyecto",
    description: p?.resumen ?? "Detalle de proyecto",
  };
}

// ✅ Página esperando params (Next 15)
export default async function ProyectoDetalle({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const proyecto = getProyecto(slug);

  if (!proyecto) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <p>Proyecto no encontrado.</p>
        <Link href="/proyectos" className="text-blue-600 underline">
          ← Volver
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <Link href="/proyectos" className="text-blue-600 underline">
        ← Volver a proyectos
      </Link>

      <header>
        <h1 className="text-3xl font-semibold">{proyecto.titulo}</h1>
        <p className="mt-2 text-sm opacity-80">{proyecto.resumen}</p>
        <div className="mt-2 text-xs opacity-70">
          {proyecto.techs.join(" · ")}
        </div>
      </header>

      <Carousel images={proyecto.imagenes} alt={proyecto.titulo} />

      <section>
        <h2 className="text-xl font-semibold mb-2">Lo que hice</h2>
        <p className="opacity-90 whitespace-pre-wrap">{proyecto.descripcion}</p>
      </section>

      {(proyecto.url || proyecto.repo) && (
        <div className="flex gap-3">
          {proyecto.url && (
            <a
              href={proyecto.url}
              target="_blank"
              className="text-blue-600 underline"
            >
              Demo
            </a>
          )}
          {proyecto.repo && (
            <a
              href={proyecto.repo}
              target="_blank"
              className="text-blue-600 underline"
            >
              Repositorio
            </a>
          )}
        </div>
      )}
    </main>
  );
}
