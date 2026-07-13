import { NextRequest, NextResponse } from "next/server";
import { getLesson } from "@/lib/cache/lessonCache";

export async function POST(request: NextRequest) {
  try {
    const { className, subject, topic } = await request.json();

    if (!className || !subject || !topic) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const lesson = await getLesson({
  classNumber: Number(className),
  subject,
  chapter,
  topic,
});

    return NextResponse.json(lesson);
  } catch (error) {
    console.error("Lesson generation failed:", error);

    return NextResponse.json(
      {
        error: "Failed to generate lesson.",
      },
      { status: 500 }
    );
  }
}