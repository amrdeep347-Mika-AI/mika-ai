import { supabaseAdmin } from "@/lib/supabase-admin";
import classes from "../../data/curriculum/classes.json";

export async function importClasses() {
  console.log("🏫 Importing Classes...");

  const { data: board } = await supabaseAdmin
    .from("boards")
    .select("*")
    .eq("name", "NCERT")
    .single();

  if (!board) {
    throw new Error("NCERT board not found");
  }

  for (const cls of classes) {
    const { error } = await supabaseAdmin
      .from("classes")
      .upsert(
        {
          board_id: board.id,
          class_number: cls.classNumber,
          name: cls.name,
          slug: cls.slug,
        },
        {
          onConflict: "slug",
        }
      );

    if (error) {
      console.error(error);
    } else {
      console.log("✅", cls.name);
    }
  }
}