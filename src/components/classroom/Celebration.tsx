interface Props {
  correct: boolean;
  celebration: string;
  correctAnswer: string;
}

export default function Celebration({
  correct,
  celebration,
  correctAnswer,
}: Props) {
  return (
    <div
      className={`mt-6 p-4 rounded-xl ${
        correct
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      <p className="font-bold">
        {correct
          ? celebration
          : `❌ Correct answer: ${correctAnswer}`}
      </p>
    </div>
  );
}