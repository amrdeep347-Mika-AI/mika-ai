import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET() {
  try {
    const { data, error } = await supabase
      .from("student_progress")
      .select("*")
      .order("completed_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabase
      .from("student_progress")
      .insert(body);

    if (error) {
      console.error(error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Unexpected server error",
      },
      { status: 500 }
    );
  }
}