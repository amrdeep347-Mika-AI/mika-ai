interface Props {
  title: string;
  current: number;
  total: number;
  xp: number;
  coins: number;
}

export default function ClassroomHeader({
  title,
  current,
  total,
  xp,
  coins,
}: Props) {
  const progress =
    total === 0 ? 0 : (current / total) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-black">
            {title}
          </h1>

          <p className="text-slate-500 mt-2">
            Professor Mika AI Classroom
          </p>
        </div>

        <div className="flex gap-6">

          <div className="text-center">
            <div className="text-3xl">⭐</div>
            <div className="font-bold">{xp}</div>
            <div className="text-sm text-slate-500">
              XP
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl">🪙</div>
            <div className="font-bold">{coins}</div>
            <div className="text-sm text-slate-500">
              Coins
            </div>
          </div>

        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between mb-2 text-sm">
          <span>Lesson Progress</span>
          <span>{current}/{total}</span>
        </div>

        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

    </div>
  );
}