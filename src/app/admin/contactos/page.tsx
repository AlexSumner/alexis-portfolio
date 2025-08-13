import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ContactosAdminPage() {
  const contactos = await prisma.contacto.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Contactos</h1>

      {contactos.length === 0 ? (
        <p className="opacity-70">Aún no hay mensajes.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-900">
              <tr>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((c) => (
                <tr key={c.id} className="border-t align-top">
                  <td className="p-3 whitespace-nowrap">
                    {new Date(c.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3">{c.nombre}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3 whitespace-pre-wrap">{c.mensaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
