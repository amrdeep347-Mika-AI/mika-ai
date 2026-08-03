interface Props {
  option: string;
  selectedAnswer: string;
  disabled: boolean;
  onClick: () => void;
}

export default function AnswerButton({
  option,
  selectedAnswer,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border rounded-2xl p-4 text-left transition ${
        selectedAnswer === option
          ? "bg-indigo-100 border-indigo-500"
          : "hover:bg-indigo-50"
      }`}
    >
      {option}
    </button>
  );
}