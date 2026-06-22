import Link from "next/link";
import { class6 } from "@/data/curriculum/class6";

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

  const chapter = class6.mathematics.chapters.find(
    (c) => c.id === chapterId
  );

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black">
        {chapter.title}
      </h1>

      <p className="mt-4 text-slate-500">
        Select a Topic
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {chapter.topics.map((topic) => (
          <Link
            key={topic}
            href={`/classes/${classId}/${subjectId}/${chapterId}/${topic
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold">
              {topic}
            </h2>
          </Link>
        ))}

      </div>

    </main>
  );
}