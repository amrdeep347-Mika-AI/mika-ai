import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{
    classId: string;
    subjectId: string;
    chapterId: string;
  }>;
}) {
  const { classId, subjectId, chapterId } = await params;

  // ----------------------------
  // Get Class
  // ----------------------------
  const { data: cls, error: classError } = await supabase
    .from("classes")
    .select("*")
    .eq("slug", classId)
    .single();

  if (classError || !cls) {
    return (
      <main className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Class not found
        </h1>
      </main>
    );
  }

  // ----------------------------
  // Get Subject
  // ----------------------------
  const { data: subject, error: subjectError } = await supabase
    .from("subjects")
    .select("*")
    .eq("class_id", cls.id)
    .eq("slug", subjectId)
    .single();

  if (subjectError || !subject) {
    return (
      <main className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Subject not found
        </h1>
      </main>
    );
  }

  // ----------------------------
  // Get Chapter
  // ----------------------------
  const { data: chapter, error: chapterError } = await supabase
    .from("chapters")
    .select("*")
    .eq("subject_id", subject.id)
    .eq("slug", chapterId)
    .single();

  if (chapterError || !chapter) {
    return (
      <main className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Chapter not found
        </h1>
      </main>
    );
  }

  // ----------------------------
  // Get Topics
  // ----------------------------
  const { data: topics, error: topicError } = await supabase
    .from("topics")
    .select("*")
    .eq("chapter_id", chapter.id)
    .order("name");

  if (topicError) {
    return (
      <main className="max-w-6xl mx-auto p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Failed to load topics
        </h1>

        <pre className="mt-6 bg-slate-100 p-4 rounded-xl">
          {JSON.stringify(topicError, null, 2)}
        </pre>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-10">

      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-6">
        {cls.name} / {subject.name} / {chapter.name}
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-black">
        {chapter.name}
      </h1>

      <p className="text-slate-500 mt-2 mb-10">
        {subject.name} • {cls.name}
      </p>

      {/* Topics */}
      <div className="space-y-4">
        {topics?.map((topic) => (
          <Link
            key={topic.id}
            href={`/classes/${classId}/${subjectId}/${chapterId}/${topic.slug}`}
            className="block rounded-2xl bg-white shadow-md hover:shadow-xl transition p-6"
          >
            <h2 className="text-xl font-semibold">
              {topic.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {topics?.length === 0 && (
        <div className="mt-10 rounded-xl bg-yellow-50 border border-yellow-200 p-6">
          <p className="text-yellow-700">
            No topics found for this chapter.
          </p>
        </div>
      )}

    </main>
  );
}