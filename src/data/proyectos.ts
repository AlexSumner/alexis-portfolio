export type Proyecto = {
  slug: "coopnet" | "mensajes" | string;
  titulo: string;
  resumen: string;
  descripcion: string;
  techs: string[];
  repo?: string;
  url?: string;
  imagenes: string[]; // rutas relativas dentro de /public
};

export const PROYECTOS: Proyecto[] = [
  {
    slug: "coopnet",
    titulo: "CoopNet — Gestión para cooperativas",
    resumen:
      "Sistema de gestión para cooperativas de ayuda mutua: socios, estados contables, recibos PDF, recordatorios, roles y permisos.",
    descripcion:
      "Desarrollé el módulo de listados con paginación, búsqueda y filtros; generación de recibos en PDF; estados contables con paginación infinita; roles (ADMIN, TESORERO) y acciones sobre socios (ver, archivar, modificar, crear recibo). Integré un Modal de confirmación reutilizable y utilidades para cálculo de valor de vivienda en recibos.",
    techs: ["Next.js", "TypeScript", "React", "Tailwind", "Node", "Sequelize"],
    url: "#",
    repo: "#",
    imagenes: [
      "/projects/coopnet/1.jpg",
      "/projects/coopnet/2.jpg",
      "/projects/coopnet/3.jpg",
    ],
  },
  {
    slug: "mensajes",
    titulo: "Mensajería automática (WhatsApp)",
    resumen:
      "Plataforma para enviar campañas por WhatsApp: contactos, grupos, buscador y paginación; back en Express/Sequelize.",
    descripcion:
      "Construí el backend para contactos y grupos (agregar/ quitar/ listar) con filtros por compañía e isActive, paginación y búsqueda por name/phone/city. En el frontend, UI para seleccionar contactos de una lista y agregarlos a grupos, con checkboxes y dos paneles.",
    techs: ["Next.js", "TypeScript", "Express", "Sequelize", "PostgreSQL"],
    url: "#",
    repo: "#",
    imagenes: [
      "/projects/mensajes/1.jpg",
      "/projects/mensajes/2.jpg",
      "/projects/mensajes/3.jpg",
    ],
  },
];

export function getProyecto(slug: string) {
  return PROYECTOS.find((p) => p.slug === slug);
}
