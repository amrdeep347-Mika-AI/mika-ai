import AnswerButton from "./AnswerButton";
import Celebration from "./Celebration";

interface Props {
  question: string;
  options: string[];
  correctAnswer: string;
  celebration: string;

  selectedAnswer: string;
  showResult: boolean;

  onAnswer: (option: string) => void;
}


export default function QuestionCard({
  question,
  options,
  correctAnswer,
  celebration,
  selectedAnswer,
  showResult,
  onAnswer,
}: Props) {

  const correct =
    selectedAnswer === correctAnswer;


  return (
    <div className="bg-white rounded-3xl shadow-lg mt-8 p-8">

      <h2 className="text-2xl font-bold">
        ❓ {question}
      </h2>


      <div className="grid gap-4 mt-8">

        {options.map((option) => (

          <AnswerButton
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            disabled={showResult}
            onClick={() => onAnswer(option)}
          />

        ))}

      </div>


      {showResult && (

        <Celebration
          correct={correct}
          celebration={celebration}
          correctAnswer={correctAnswer}
        />

      )}

    </div>
  );
}