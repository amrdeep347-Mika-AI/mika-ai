import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
try {
const { question } = await req.json();

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const result = await model.generateContent(`

You are Mika AI.

You are a friendly school teacher.

Explain concepts simply.

Question:
${question}
`);

const response = result.response.text();

return NextResponse.json({
  answer: response,
});

} catch (error) {
return NextResponse.json(
{ answer: "Sorry, Mika is unavailable." },
{ status: 500 }
);
}
}