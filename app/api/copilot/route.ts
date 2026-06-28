import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt, complaints } = await req.json();

    const systemPrompt = `
You are CivicPulse AI.

You are an AI assistant for a Smart City platform.

Always answer professionally.

The following is the city's current complaint database.

${JSON.stringify(complaints, null, 2)}

Use ONLY this complaint data whenever the user asks about complaints, wards, officers, departments, or statistics.

If the user asks general knowledge, answer normally.

Keep responses concise.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}\n\nUser: ${prompt}`,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({
      reply: "Sorry, I couldn't process your request.",
    });
  }
}