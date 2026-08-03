interface Props {
  current: number;
  total: number;
}

export default function ProgressPanel({
  current,
  total,
}: Props) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

      <div className="flex justify-between font-bold">

        <span>
          Lesson Progress
        </span>

        <span>
          {current + 1} / {total}
        </span>

      </div>

      <div className="w-full bg-slate-200 rounded-full h-4 mt-4">

        <div
          className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}