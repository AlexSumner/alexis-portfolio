import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const nombre = String(form.get("nombre") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const mensaje = String(form.get("mensaje") ?? "").trim();

    if (!nombre || !email || !mensaje) {
      return new Response("Faltan campos", { status: 400 });
    }

    await prisma.contacto.create({
      data: { nombre, email, mensaje },
    });

    // PRG: evitar re-envío al refrescar
    return new Response(null, {
      status: 303,
      headers: { Location: "/?sent=1#contacto" },
    });
  } catch (e) {
    console.error("contact error:", e);
    return new Response("Error al guardar", { status: 500 });
  }
}
