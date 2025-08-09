export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm dark:borderzinc-800">
      <div className="mx-auto max-w-5xl px-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Alexis Araujo</p>
        <div className="flex gap-4">
          <a
            className="underline"
            href="https://github.com/AlexSumner"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/alexis-araújo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="underline"
            href="/CV_Alexis_Araujo_Desarrollador.pdf"
            download
          >
            CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
