"use client";

import { useState, useEffect } from "react";
import { class6 } from "@/data/curriculum/class6";
import { class6MathLessons } from "@/data/lessons/class6-math";
import { motion } from "framer-motion";


export default function LearnPage() {
  const chapters = class6.mathematics.chapters;

  const [selectedTopic, setSelectedTopic] =
    useState("Introduction");
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState(
  "🤖 Hi! I'm Mika. Ask me anything."
);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("mika-progress");

  if (saved) {
    setCompletedTopics(JSON.parse(saved));
  }
  const savedXP = localStorage.getItem("mika-xp");
  const savedLevel = localStorage.getItem("mika-level");

  if (savedXP) setXp(Number(savedXP));
  if (savedLevel) setLevel(Number(savedLevel));
}, []);
const markTopicComplete = () => {
  if (completedTopics.includes(selectedTopic)) return;

  const updated = [...completedTopics, selectedTopic];

  setCompletedTopics(updated);

  localStorage.setItem(
    "mika-progress",
    JSON.stringify(updated)
  );

  const newXP = xp + 10;
  setXp(newXP);

  localStorage.setItem(
    "mika-xp",
    newXP.toString()
  );

  const newLevel = Math.floor(newXP / 100) + 1;

  setLevel(newLevel);

  localStorage.setItem(
    "mika-level",
    newLevel.toString()
  );
};
const askMika = async () => {
  if (!question.trim()) return;

  setLoading(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
      }),
    });

    const data = await response.json();

    setAnswer(data.answer);
  } catch {
    setAnswer(
      "Sorry, Mika is unavailable right now."
    );
  }

  setLoading(false);
};
  const topicKey = selectedTopic
    .toLowerCase()
    .replace(/\s+/g, "-");

  const lesson =
    class6MathLessons[
      topicKey as keyof typeof class6MathLessons
    ] || class6MathLessons.introduction;

  return (
    <main className="h-screen flex bg-slate-50">

      {/* SIDEBAR */}

      <aside className="w-80 bg-white border-r overflow-y-auto">

        <div className="p-6 border-b sticky top-0 bg-white">

          <h1 className="text-3xl font-black text-indigo-700">
            Mika AI
          </h1>

          <p className="text-slate-500 mt-2">
            Class 6 Mathematics
          </p>

        </div>

        <div className="p-4">

          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="mb-8"
            >
              <h2 className="font-bold text-lg mb-3 text-slate-800">
                📘 {chapter.title}
              </h2>

              <div className="space-y-2">

                {chapter.topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() =>
                      setSelectedTopic(topic)
                    }
                    className={`w-full text-left p-3 rounded-xl transition ${
                      selectedTopic === topic
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-indigo-50 text-slate-700"
                    }`}
                  >
                    {topic}
                  </button>
                ))}

              </div>
            </div>
          ))}

        </div>

<div className="mt-10">

  <h3 className="font-bold text-xl">
    💬 Ask Mika
  </h3>

  <textarea
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    placeholder="Ask Mika anything..."
    className="w-full mt-4 p-3 border rounded-xl"
    rows={4}
  />

  <button
    onClick={askMika}
    className="w-full mt-3 bg-indigo-600 text-white p-3 rounded-xl font-bold"
  >
    {loading ? "Thinking..." : "Ask Mika"}
  </button>

  <div className="mt-4 bg-slate-100 p-4 rounded-xl whitespace-pre-wrap">
    {answer}
  </div>

</div>


      </aside>

      {/* MAIN CONTENT */}

      <section className="flex-1 overflow-y-auto">

        <div className="max-w-5xl mx-auto p-10">

          {/* HEADER */}

          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-10 text-white">

  <h1 className="text-5xl font-black">
    🤖 Mika AI Teacher
  </h1>

  <div className="mt-6 bg-white/10 rounded-2xl p-6">

    <p className="text-2xl font-bold">
      Hi Student 👋
    </p>

    <p className="mt-3 text-lg">
      Today we are learning:
      <span className="font-bold">
        {" "}{lesson.title}
      </span>
    </p>

    <p className="mt-3">
      Don't worry if this topic seems difficult.
      I'll explain it step by step with examples.
    </p>

  </div>

</div>

          {/* ANIMATION AREA */}

          <div className="bg-white rounded-3xl shadow-lg mt-8 p-8">

            <h2 className="text-2xl font-bold">
              🎬 Animation Area
            </h2>

  
<div className="h-[300px] mt-6 rounded-2xl bg-gradient-to-r from-indigo-100 to-cyan-100 flex items-center justify-center">

  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="text-center"
  >

    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="text-8xl"
    >
      🤖
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-xl font-bold mt-4"
    >
      Mika is Teaching...
    </motion.p>

  </motion.div>

</div>



          </div>

          {/* EXPLANATION */}

          <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

            <h2 className="text-3xl font-bold mb-6">
              📘 Explanation
            </h2>

            <p className="text-lg leading-8 text-slate-700">
              {lesson.explanation}
            </p>

          </div>

          {/* EXAMPLES */}

          <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

            <h2 className="text-3xl font-bold mb-6">
              💡 Examples
            </h2>

            <div className="space-y-4">

              {lesson.examples.map(
                (example, index) => (
                  <div
                    key={index}
                    className="bg-slate-100 rounded-xl p-4"
                  >
                    {example}
                  </div>
                )
              )}

            </div>

          </div>

          {/* KEY POINTS */}

          <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

            <h2 className="text-3xl font-bold mb-6">
              ⭐ Key Points
            </h2>

            <div className="space-y-3">

              {lesson.keyPoints.map(
                (point, index) => (
                  <div key={index}>
                    ✅ {point}
                  </div>
                )
              )}

            </div>

          </div>

          {/* QUIZ */}

          <div className="bg-white rounded-3xl p-10 shadow-lg mt-8">

            <h2 className="text-3xl font-bold mb-6">
              📝 Quick Quiz
            </h2>

            {lesson.quiz.map((q, index) => (
              <div key={index}>

                <h3 className="text-xl font-bold mb-6">
                  {q.question}
                </h3>

                <div className="space-y-3">

                  {q.options.map((option) => (
                    <button
                      key={option}
                      className="w-full text-left border rounded-xl p-4 hover:bg-slate-50 transition"
                    >
                      {option}
                    </button>
                  ))}

                </div>

              </div>
            ))}

          </div>

          {/* AI ACTIONS */}

          <div className="grid md:grid-cols-2 gap-4 mt-8 mb-10">

            <button className="bg-indigo-600 text-white p-5 rounded-2xl font-bold">
              Explain Again
            </button>

            <button className="bg-cyan-500 text-white p-5 rounded-2xl font-bold">
              Real Life Examples
            </button>

            <button className="bg-white shadow-lg p-5 rounded-2xl font-bold">
              Generate Quiz
            </button>

            <button className="bg-white shadow-lg p-5 rounded-2xl font-bold">
              Hindi Explanation
            </button>

          </div>
           <div className="mt-8 flex justify-end">

          <button
  onClick={markTopicComplete}
  className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold"
>
  ✅ Mark Topic Complete
</button>

</div>

        </div>

      </section>
  
<aside className="w-80 bg-white border-l p-6 overflow-y-auto">

  <h2 className="text-2xl font-black">
    📈 Progress
  </h2>

  <div className="mt-6">

    <p className="font-bold">
      Chapter Progress
    </p>

    <div className="w-full bg-slate-200 rounded-full h-4 mt-3">
      <div
        className="bg-indigo-600 h-4 rounded-full"
        style={{
          width: `${Math.min(
            (completedTopics.length / 10) * 100,
            100
          )}%`,
        }}
      />
    </div>

    <p className="mt-2 text-slate-500">
      {completedTopics.length} Topics Completed
    </p>

  </div>

  <div className="mt-8 bg-yellow-100 p-4 rounded-xl">

    <h3 className="font-bold">
      ⭐ XP Points
    </h3>

    <p className="mt-2">
      {xp} XP
    </p>

  </div>

  <div className="mt-4 bg-indigo-100 p-4 rounded-xl">

    <h3 className="font-bold">
      🏆 Level
    </h3>

    <p className="mt-2">
      Level {level}
    </p>

  </div>

  <div className="mt-10">

    <h3 className="font-bold text-xl">
      🏆 Achievements
    </h3>

    <div className="mt-4 space-y-3">

      <div className="bg-amber-100 p-4 rounded-xl">
        🔥 3 Day Streak
      </div>

      <div className="bg-green-100 p-4 rounded-xl">
        📘 First Chapter Started
      </div>

      <div className="bg-blue-100 p-4 rounded-xl">
        🤖 Learned with Mika
      </div>

    </div>

  </div>

</aside>

           
    </main>
  );
}

