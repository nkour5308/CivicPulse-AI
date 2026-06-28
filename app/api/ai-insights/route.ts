import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  const { complaints } = await req.json();

  const prompt = `
You are CivicPulse AI.

Analyze the following civic complaints.

Return ONLY three short insights.

Each insight must have:

Title:
Recommendation:

Complaint Data:
${JSON.stringify(complaints)}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      text: response.text,
    });
  } catch {
    return NextResponse.json({
      text: "No AI insights available.",
    });
  }
}