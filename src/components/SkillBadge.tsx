export default function SkillBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-full bg-violet-100 px-2 py-1 text-xs text-violet-800 dark:bg-violet-800 dark:text-violet-100">
      {children}
    </span>
  );
}
