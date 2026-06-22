import Link from "next/link";

export default function Home() {
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-300 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
            <span>🚀</span>
            <span>Next Generation AI Learning Platform</span>
          </div>

          {/* Logo */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white flex items-center justify-center shadow-2xl">

            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center">

              <span className="text-white text-5xl font-black">
                M
              </span>

            </div>

          </div>

          <h1 className="text-5xl md:text-8xl font-black">
            Mika AI
          </h1>

          <p className="text-2xl mt-4 text-blue-100 font-medium">
            Your Personal AI Teacher
          </p>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-blue-50">
            Learn every NCERT topic from Class 1 to 12 through
            AI-powered lessons, animations, quizzes,
            tests and personalized learning.
          </p>

<div className="flex flex-col md:flex-row justify-center gap-4 mt-12">

  <Link
    href="/classes"
    className="bg-white text-black px-10 py-4 rounded-2xl font-bold shadow-xl"
  >
    Start Learning
  </Link>

  <Link
    href="/classes"
    className="border border-white text-white px-10 py-4 rounded-2xl font-bold"
  >
    Explore Classes
  </Link>

</div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold">
              AI Teacher
            </h3>

            <p className="mt-4 text-slate-600">
              Learn with an AI teacher in Hindi and English.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold">
              Interactive Learning
            </h3>

            <p className="mt-4 text-slate-600">
              Animations and visual explanations for every topic.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold">
              NCERT Complete
            </h3>

            <p className="mt-4 text-slate-600">
              Complete NCERT curriculum from Class 1 to 12.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h2 className="text-5xl font-black text-blue-600">
              12
            </h2>
            <p className="text-slate-600 mt-2">
              Classes
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h2 className="text-5xl font-black text-blue-600">
              5000+
            </h2>
            <p className="text-slate-600 mt-2">
              Topics
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h2 className="text-5xl font-black text-blue-600">
              AI
            </h2>
            <p className="text-slate-600 mt-2">
              Teacher
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h2 className="text-5xl font-black text-blue-600">
              24/7
            </h2>
            <p className="text-slate-600 mt-2">
              Learning
            </p>
          </div>

        </div>

      </section>

      {/* CLASSES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black text-center text-slate-900">
          Choose Your Class
        </h2>

        <p className="text-center text-slate-500 mt-4">
          Complete NCERT curriculum from Class 1 to 12
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {classes.map((cls) => (
            <Link
              key={cls}
              href={"/classes/" + cls}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">
                📘
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                Class {cls}
              </h3>

              <div className="mt-4">
                <p className="text-slate-500">
                  NCERT Curriculum
                </p>

                <p className="text-sm text-blue-600 mt-2 font-medium">
                  AI Powered Learning
                </p>
              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[40px] p-16 text-center text-white">

          <h2 className="text-5xl font-black">
            Start Learning Today
          </h2>

          <p className="mt-6 text-xl">
            Learn with your personal AI teacher.
          </p>

          <Link
            href="/classes"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold"
          >
            Get Started
          </Link>

        </div>

      </section>

    </main>
  );
}

