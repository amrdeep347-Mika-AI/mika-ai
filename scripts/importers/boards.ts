import { supabaseAdmin } from "@/lib/supabase-admin";
import boards from "@/data/curriculum/boards.json";

export async function importBoards() {
  console.log("📚 Importing Boards...");

  for (const board of boards) {
    const { error } = await supabaseAdmin
      .from("boards")
      .upsert(
        {
          name: board.name,
        },
        {
          onConflict: "name",
        }
      );

    if (error) {
      console.error(error);
    } else {
      console.log("✅", board.name);
    }
  }
}