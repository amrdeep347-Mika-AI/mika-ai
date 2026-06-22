import { class6MathLessons } from "@/data/lessons/class6-math";

export default async function TopicPage({
  params,
}: {
  params: Promise<{
    classId: string;
    subjectId: string;
    chapterId: string;
    topicId: string;
  }>;
}) {
  const { topicId } = await params;

  const lesson =
    class6MathLessons[
      topicId as keyof typeof class6MathLessons
    ];

  if (!lesson) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h1 className="text-4xl font-black">
            Lesson Coming Soon
          </h1>

          <p className="mt-4 text-slate-500">
            Mika AI is preparing this lesson.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      {/* Lesson Title */}

      <h1 className="text-5xl font-black text-slate-900">
        {lesson.title}
      </h1>

      {/* Explanation */}

      <div className="bg-white rounded-3xl p-10 shadow-lg mt-10">

        <h2 className="text-3xl font-bold mb-6">
          📘 Explanation
        </h2>

        <p className="text-lg leading-8 text-slate-700">
          {lesson.explanation}
        </p>

      </div>

      {/* Examples */}

      <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

        <h2 className="text-3xl font-bold mb-6">
          💡 Examples
        </h2>

        <ul className="space-y-3">

          {lesson.examples.map((example, index) => (
            <li
              key={index}
              className="bg-slate-100 rounded-xl p-4"
            >
              {example}
            </li>
          ))}

        </ul>

      </div>

      {/* Key Points */}

      <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

        <h2 className="text-3xl font-bold mb-6">
          ⭐ Key Points
        </h2>

        <ul className="space-y-3">

          {lesson.keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex gap-3"
            >
              <span>✅</span>
              <span>{point}</span>
            </li>
          ))}

        </ul>

      </div>

      {/* Quiz */}

      <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

        <h2 className="text-3xl font-bold mb-6">
          📝 Quick Quiz
        </h2>

        {lesson.quiz.map((q, index) => (
          <div key={index}>

            <h3 className="font-bold text-xl mb-6">
              {q.question}
            </h3>

            <div className="space-y-3">

              {q.options.map((option) => (
                <button
                  key={option}
                  className="w-full text-left border rounded-xl p-4 hover:bg-slate-50"
                >
                  {option}
                </button>
              ))}

            </div>

          </div>
        ))}

      </div>

      {/* Mika AI Teacher */}

      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-10 text-white mt-8">

        <h2 className="text-3xl font-black">
          🤖 Mika AI Teacher
        </h2>

        <p className="mt-4 text-lg">
          Learn smarter with AI-powered guidance.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <button className="bg-white text-indigo-700 p-4 rounded-xl font-bold">
            Explain Again
          </button>

          <button className="bg-white text-indigo-700 p-4 rounded-xl font-bold">
            Real Life Examples
          </button>

          <button className="bg-white text-indigo-700 p-4 rounded-xl font-bold">
            Generate Questions
          </button>

          <button className="bg-white text-indigo-700 p-4 rounded-xl font-bold">
            Hindi Explanation
          </button>

        </div>

      </div>

    </main>
  );
}

