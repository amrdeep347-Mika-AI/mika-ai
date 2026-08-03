import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ClassPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;

  // Find class
  const { data: cls } = await supabase
    .from("classes")
    .select("*")
    .eq("slug", classId)
    .single();

  if (!cls) {
    return <div className="p-10">Class not found</div>;
  }

  // Get subjects
  const { data: subjects } = await supabase
    .from("subjects")
    .select("*")
    .eq("class_id", cls.id)
    .order("name");

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-5xl font-black mb-10">
        {cls.name}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {subjects?.map((subject) => (
          <Link
            key={subject.id}
            href={`/classes/${cls.slug}/${subject.slug}`}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl"
          >
            <div className="text-5xl">
              {subject.icon}
            </div>

            <h2 className="text-2xl font-bold mt-4">
              {subject.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}