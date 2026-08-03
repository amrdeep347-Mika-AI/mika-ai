import Link from "next/link";

const classes = Array.from({ length: 12 }, (_, i) => i + 1);

export default function ClassesPage() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-5xl font-black mb-10">
        Choose Your Class
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {classes.map((cls) => (
          <Link
            key={cls}
            href={`/classes/${cls}`}
            className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition"
          >
            <div className="text-5xl">📘</div>

            <h2 className="text-2xl font-bold mt-4">
              Class {cls}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}