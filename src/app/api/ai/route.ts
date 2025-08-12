import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No hay mensajes" }), {
        status: 400,
      });
    }

    const result = await client.responses.create({
      model: "gpt-4o", // o "gpt-4o-mini" para abaratar
      input: messages,
    });

    const text = result.output_text ?? "";

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err: any) {
    console.error("/api/ai error:", err?.message || err);
    return new Response(JSON.stringify({ error: "Falló la generación" }), {
      status: 500,
    });
  }
}
