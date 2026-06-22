import Link from "next/link";

export default function ClassesPage() {
  const classes = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-black text-center">
          Choose Your Class
        </h1>

        <p className="text-center text-slate-500 mt-4">
          Complete NCERT Curriculum
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {classes.map((cls) => (
            <Link
              key={cls}
              href={"/classes/" + cls}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition text-center"
            >
              <h2 className="text-3xl font-bold">
                Class {cls}
              </h2>

              <p className="text-slate-500 mt-2">
                NCERT
              </p>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}