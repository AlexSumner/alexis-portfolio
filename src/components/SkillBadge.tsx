export default function SkillBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800">
      {children}
    </span>
  );
}
