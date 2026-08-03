interface Props {
  isLastStep: boolean;
  onClick: () => void;
}

export default function NextButton({
  isLastStep,
  onClick,
}: Props) {
  return (
    <div className="mt-8 flex justify-end">

      <button
        onClick={onClick}
        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700"
      >
        {isLastStep
          ? "Finish Lesson 🎉"
          : "Next Step ➜"}
      </button>

    </div>
  );
}