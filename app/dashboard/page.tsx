"use client";

import { useEffect, useState } from "react";
import { getLevel } from "@/lib/level";

interface Progress {
  id: string;
  lesson_title: string;
  score: number;
  total_questions: number;
  xp: number;
  coins: number;
  completed_at: string;
}

export default function DashboardPage() {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  async function loadProgress() {
    const res = await fetch("/api/progress");
    const data = await res.json();

    setProgress(data);
    setLoading(false);
  }

  if (loading) {
    return <div className="p-10">Loading dashboard...</div>;
  }
 const totalLessons = progress.length;

const totalXP = progress.reduce(
  (sum, lesson) => sum + lesson.xp,
  0
);
const levelInfo = getLevel(totalXP);

const totalCoins = progress.reduce(
  (sum, lesson) => sum + lesson.coins,
  0
);

const averageScore =
  totalLessons === 0
    ? 0
    : Math.round(
        (progress.reduce(
          (sum, lesson) =>
            sum + (lesson.score / lesson.total_questions) * 100,
          0
        ) / totalLessons)
      );
  return (
    <main className="max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-black mb-8">
        Student Dashboard
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 mb-8">
  <h2 className="text-2xl font-bold">
    {levelInfo.title}
  </h2>

  <p className="mt-2">
    Level {levelInfo.level}
  </p>

  <p className="mt-2">
    XP: {totalXP} / {levelInfo.nextLevelXP}
  </p>

  <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
    <div
      className="bg-indigo-600 h-3 rounded-full"
      style={{
        width: `${Math.min(
          (totalXP / levelInfo.nextLevelXP) * 100,
          100
        )}%`,
      }}
    />
  </div>
</div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-slate-500">📚 Lessons</p>
    <h2 className="text-4xl font-black mt-2">
      {totalLessons}
    </h2>
  </div>

  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-slate-500">⭐ XP</p>
    <h2 className="text-4xl font-black mt-2">
      {totalXP}
    </h2>
  </div>

  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-slate-500">🪙 Coins</p>
    <h2 className="text-4xl font-black mt-2">
      {totalCoins}
    </h2>
  </div>

  <div className="bg-white rounded-2xl shadow p-6">
    <p className="text-slate-500">🎯 Accuracy</p>
    <h2 className="text-4xl font-black mt-2">
      {averageScore}%
    </h2>
  </div>
  <div className="bg-white rounded-2xl shadow mt-8 p-6">

  <h2 className="text-2xl font-bold mb-4">
    Recent Lessons
  </h2>

  <table className="w-full">

    <thead>
      <tr className="border-b">
        <th className="text-left py-3">Lesson</th>
        <th className="text-left py-3">Score</th>
        <th className="text-left py-3">XP</th>
        <th className="text-left py-3">Coins</th>
      </tr>
    </thead>

    <tbody>

      {progress.map((lesson) => (

        <tr
          key={lesson.id}
          className="border-b"
        >
          <td className="py-3">
            {lesson.lesson_title}
          </td>

          <td>
            {lesson.score}/{lesson.total_questions}
          </td>

          <td>
            ⭐ {lesson.xp}
          </td>

          <td>
            🪙 {lesson.coins}
          </td>
        </tr>

      ))}

    </tbody>

  </table>

</div>

</div>
    </main>
  );
}