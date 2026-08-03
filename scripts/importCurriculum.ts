import { config } from "dotenv";

config({ path: ".env.local" });

import { importBoards } from "./importers/boards";
import { importClasses } from "./importers/classes";
import { importSubjects } from "./importers/subjects";
import { importChapters } from "./importers/chapters";
import { importTopics } from "./importers/topics";

async function run() {
  console.log("🚀 Starting Curriculum Import");

await importBoards();
await importClasses();
await importSubjects();
await importChapters();
await importTopics();

  console.log("🎉 Curriculum Imported Successfully");
}

run().catch(console.error);