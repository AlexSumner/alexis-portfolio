export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <h2 className="font-lora mb-6 text-3xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
