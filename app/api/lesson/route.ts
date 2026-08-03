import { NextRequest, NextResponse } from "next/server";
import { getLesson } from "@/lib/cache/lessonCache";

export async function POST(request: NextRequest) {
  try {
    const {
      className,
      subject,
      chapter,
      topic,
    } = await request.json();

    if (!className || !subject || !chapter || !topic) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Convert "class-1" -> 1
    const classNumber = parseInt(
      className.replace("class-", ""),
      10
    );

    if (Number.isNaN(classNumber)) {
      return NextResponse.json(
        { error: "Invalid class." },
        { status: 400 }
      );
    }

    const lesson = await getLesson({
      classNumber,
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