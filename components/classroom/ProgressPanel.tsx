interface ProgressPanelProps {
  xp: number;
  level: number;
  completedTopics: string[];
  totalTopics: number;
}

export default function ProgressPanel({
  xp,
  level,
  completedTopics,
  totalTopics,
}: ProgressPanelProps) {
  const progress =
    (completedTopics.length / totalTopics) * 100;

  return (
    <aside className="w-80 bg-white border-l p-6">

      <h2 className="text-2xl font-black">
        📈 Progress
      </h2>

      <div className="mt-8">

        <div className="bg-slate-100 rounded-2xl p-5">

          <p className="font-bold">
            ⭐ Level {level}
          </p>

          <p className="mt-2">
            XP: {xp}
          </p>

        </div>

        <div className="mt-6">

          <p className="font-bold mb-3">
            Chapter Progress
          </p>

          <div className="w-full bg-slate-200 rounded-full h-4">

            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-3">

            {completedTopics.length} / {totalTopics}

          </p>

        </div>

        <div className="mt-10">

          <h3 className="font-bold text-xl">
            🏆 Achievements
          </h3>

          <div className="mt-4 space-y-3">

            <div className="bg-yellow-100 rounded-xl p-4">
              🔥 3 Day Streak
            </div>

            <div className="bg-green-100 rounded-xl p-4">
              🎓 Fast Learner
            </div>

            <div className="bg-blue-100 rounded-xl p-4">
              ⭐ Level {level}
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}