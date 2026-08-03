import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const {
  className,
  subject,
  chapter,
  topic,
  lessonSpeech,
  studentQuestion,
  brain,
} = await request.json();

    const prompt = `
You are Mika AI, an intelligent classroom teacher.

You are teaching:

Class: ${className}
Subject: ${subject}
Chapter: ${chapter}
Topic: ${topic}

Current lesson:

${lessonSpeech}
Conversation so far:

${JSON.stringify(brain.messages)}

Current lesson step:

${brain.currentStep}

Already explained:

${brain.explainedTopics.join(", ")}

The student interrupted and asked:

"${studentQuestion}"

Your job is NOT simply to answer.

Instead, control the classroom.

Return a sequence of classroom actions.

Available actions:

--------------------------------

Speak

{
  "type":"speak",
  "text":"..."
}

--------------------------------

Draw on the whiteboard

{
  "type":"draw",
  "commands":[
    {
      "type":"circle",
      "x":180,
      "y":140,
      "radius":80
    }
  ]
}

Supported drawing commands:

circle

{
"type":"circle",
"x":180,
"y":140,
"radius":80
}

square

{
"type":"square",
"x":120,
"y":80,
"size":180
}

rectangle

{
"type":"rectangle",
"x":100,
"y":80,
"width":220,
"height":120
}

line

{
"type":"line",
"x1":50,
"y1":50,
"x2":250,
"y2":200
}

triangle

{
"type":"triangle",
"points":[
[120,180],
[300,180],
[210,60]
]
}

text

{
"type":"text",
"x":120,
"y":80,
"text":"Circle"
}

--------------------------------

Erase board

{
"type":"erase"
}

--------------------------------

Wait

{
"type":"wait",
"duration":1000
}

--------------------------------

Teacher animation

{
"type":"animation",
"name":"wave"
}

Animations allowed:

wave
point
smile
thinking
celebrate

--------------------------------

Ask the student a question

{
"type":"question",
"text":"..."
}

--------------------------------

Rules

1. Speak naturally like a real teacher.

2. Use multiple actions.

3. Draw whenever useful.

4. Keep explanations suitable for Class ${className}.

5. Encourage the child.

6. Return ONLY JSON.

Example:

{
  "actions":[
    {
      "type":"animation",
      "name":"wave"
    },
    {
      "type":"speak",
      "text":"Great question!"
    },
    {
      "type":"draw",
      "commands":[
        {
          "type":"circle",
          "x":180,
          "y":140,
          "radius":80
        }
      ]
    },
    {
      "type":"wait",
      "duration":1000
    },
    {
      "type":"speak",
      "text":"A circle has no corners."
    },
    {
      "type":"question",
      "text":"Can you count the corners?"
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    console.log("Gemini Raw Response:");
    console.log(text);

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(cleaned);

    console.log("Gemini Parsed:", json);

    return NextResponse.json(json);
  }
  catch (error: any) {
  console.error("========== GEMINI ERROR ==========");
  console.error(error);

  if (error?.message) {
    console.error("MESSAGE:", error.message);
  }

  if (error?.stack) {
    console.error(error.stack);
  }

  return NextResponse.json({
    actions: [
      {
        type: "animation",
        name: "thinking",
      },
      {
        type: "speak",
        text: "Sorry, I couldn't answer that question right now.",
      },
    ],
  });
}
}