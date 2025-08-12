"use client";
import { useState } from "react";

type Msg = { role: "user" | "system" | "assistant"; content: string };

export default function IAPlaygroundPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = async () => {
    if (!input.trim()) return;

    // agregar tu mensaje (tipado correcto)
    const next: Msg[] = [
      ...messages,
      { role: "user" as const, content: input },
    ];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      const data: { text?: string; error?: string } = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error desconocido");

      // ahora sí, agregar la respuesta del assistant
      setMessages((prev) => [
        ...prev,
        { role: "assistant" as const, content: data.text ?? "" },
      ]);
    } catch (e: any) {
      setError(e.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      send();
    }
  };

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold mb-4">IA Playground</h1>

      <div className="rounded border p-3 bg-white/50 dark:bg-zinc-900/40">
        <div className="space-y-3 max-h-[50vh] overflow-auto">
          {messages.length === 0 && (
            <p className="text-sm opacity-70">
              Probá con: "Generá un título para mi proyecto CoopNet" o "Hacé un
              resumen en 3 bullets de estos beneficios: …"
            </p>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`text-sm leading-relaxed ${
                m.role === "assistant" ? "" : "text-zinc-700 dark:text-zinc-300"
              }`}
            >
              <span className="font-medium mr-2">
                {m.role === "assistant" ? "IA" : "Vos"}:
              </span>
              <span className="whitespace-pre-wrap">{m.content}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Escribí tu prompt… (⌘/Ctrl+Enter para enviar)"
            className="w-full h-28 p-3 rounded border bg-transparent focus:outline-none"
          />
          <div className="flex items-center gap-3">
            <button
              onClick={send}
              disabled={loading}
              className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
            >
              {loading ? "Generando…" : "Enviar"}
            </button>
            {error && <span className="text-red-600 text-sm">{error}</span>}
          </div>
        </div>
      </div>
    </main>
  );
}
