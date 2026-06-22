
import Link from "next/link";

export default async function ClassPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;

  const subjects = [
    "mathematics",
    "science",
    "english",
    "hindi",
    "social-science",
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black">
        Class {classId}
      </h1>

      <p className="mt-4 text-slate-500">
        Select a Subject
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {subjects.map((subject) => (
          <Link
            key={subject}
            href={`/classes/${classId}/${subject}`}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold capitalize">
              {subject.replace("-", " ")}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

