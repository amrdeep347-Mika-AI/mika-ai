import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const {
      question,
      className,
      subject,
      chapter,
      topic,
    } = await request.json();

    const prompt = `
You are Mika AI.

You are teaching a ${className} student.

Subject:
${subject}

Chapter:
${chapter}

Topic:
${topic}

The student interrupted the lesson and asked:

"${question}"

Rules:

- Answer only according to Class ${className} level.
- Keep the answer VERY short (2-4 sentences).
- Speak like a friendly primary school teacher.
- Never mention you are an AI.
- If the student asks to draw or show something, use the drawing object.
- If no drawing is needed, set drawing.type to "none".
- Continue the lesson naturally.

Supported drawing types:

square
rectangle
circle
triangle
star
line
none

Return ONLY valid JSON.

{
  "answer":"...",
  "drawing":{
      "type":"square"
  },
  "boardInstruction":"...",
  "animation":"draw",
  "continueLesson":true
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    const json = JSON.parse(text);

    return NextResponse.json(json);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        answer: "Let's continue our lesson!",
        drawing: {
          type: "none",
        },
        boardInstruction: "",
        animation: "none",
        continueLesson: true,
      },
      {
        status: 200,
      }
    );
  }
}