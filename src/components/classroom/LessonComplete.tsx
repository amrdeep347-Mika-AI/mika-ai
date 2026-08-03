interface Props {
  title: string;
  score: number;
  totalQuestions: number;
  xp: number;
  coins: number;
}

export default function LessonComplete({
  title,
  score,
  totalQuestions,
  xp,
  coins,
}: Props) {
  const accuracy = Math.round((score / totalQuestions) * 100);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 text-center mt-8">

      <div className="text-7xl">🎉</div>

      <h2 className="text-3xl font-black mt-4">
        Lesson Completed!
      </h2>

      <p className="text-slate-600 mt-3">
        Great job completing <strong>{title}</strong>.
      </p>

      <div className="mt-8 space-y-2">
        <p className="text-2xl font-bold">
          Score: {score} / {totalQuestions}
        </p>

        <p className="text-lg text-slate-600">
          Accuracy: {accuracy}%
        </p>
      </div>
      <div className="mt-6 space-y-2">
         <p className="text-xl font-semibold">⭐ XP Earned: {xp}</p>
        <p className="text-xl font-semibold">🪙 Coins Earned: {coins}</p>
    </div>

    </div>
  );
}