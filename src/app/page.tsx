import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

type SearchParams = { sent?: string };

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { sent } = await searchParams; // leemos ?sent=1
  const showThanks = sent === "1";

  return (
    <main className="mx-auto max-w-5xl px-4">
      {/* Aviso de éxito */}
      {showThanks && (
        <div className="mt-4 mb-6 rounded-lg border p-3 text-sm bg-green-50 border-green-200 text-green-800">
          ¡Gracias por tu mensaje! Te responderé a la brevedad.
        </div>
      )}

      {/* Héroe */}
      <Section title="Hola, soy Alexis Araujo">
        <div className="flex items-center justify-between">
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
            Desarrollador Fullstack (React · Next.js · Node.js · Prisma).
            Construyo interfaces claras y APIs robustas.
          </p>
          <ThemeToggle />
        </div>
      </Section>

      {/* Sobre mí */}
      <Section title="Sobre mí">
        <p className="text-zinc-700 dark:text-zinc-300">
          Me apasiona la programación y el aprendizaje continuo. Trabajo en
          proyectos web fullstack y también colaboro en áreas de marketing y
          ventas cuando el proyecto lo necesita.
        </p>
      </Section>

      {/* Habilidades técnicas */}
      <Section title="Habilidades técnicas">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((s) => (
                <SkillBadge key={s}>{s}</SkillBadge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((s) => (
                <SkillBadge key={s}>{s}</SkillBadge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium">Herramientas</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <SkillBadge key={s}>{s}</SkillBadge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experiencia */}
      <Section title="Experiencia">
        <ul className="space-y-4">
          {experience.map((item) => (
            <li
              key={item.role}
              className="rounded-2xl border p-4 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">
                  {item.role} · {item.company}
                </p>
                <span className="text-xs text-zinc-500">{item.period}</span>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* Formación */}
      <Section title="Formación">
        <ul className="space-y-2 text-sm">
          {education.map((e) => (
            <li
              key={e.title}
              className="flex items-center justify-between rounded-xl border p-3 dark:border-zinc-800"
            >
              <span>
                {e.title} – {e.place}
              </span>
              <span className="text-xs text-zinc-500">{e.year}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title="Contacto">
        <form action="/api/contact" method="post" className="space-y-3">
          <input
            name="nombre"
            placeholder="Nombre"
            className="w-full rounded-xl border p-3 dark:border-zinc-800"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-3 dark:border-zinc-800"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            className="w-full rounded-xl border p-3 dark:border-zinc-800"
            rows={5}
          />
          <button className="rounded-xl border px-4 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
            Enviar
          </button>
        </form>
      </Section>

      <Footer />
    </main>
  );
}
