"use client";

import { useState } from "react";

interface TeachingStep {
  title: string;
  speech: string;
  boardInstruction: string;
  animation: string;
  question: string;
  options: string[];
  correctAnswer: string;
  celebration: string;
}

interface Props {
  title: string;
  welcomeMessage: string;
  introduction: string;
  teachingSteps: TeachingStep[];
}

export default function TeachingEngine({
  title,
  welcomeMessage,
  introduction,
  teachingSteps,
}: Props) {
  const [step, setStep] = useState(0);

  const current = teachingSteps[step];

  return (
    <div className="bg-white rounded-3xl shadow-lg mt-8 p-8">

      <h1 className="text-4xl font-black">
        🎓 Mika Live Classroom
      </h1>

      <div className="mt-6 bg-indigo-50 rounded-2xl p-6">

        <h2 className="text-2xl font-bold">
          {welcomeMessage}
        </h2>

        <p className="mt-4 text-lg">
          {introduction}
        </p>

      </div>

      <div className="grid grid-cols-3 gap-8 mt-8">

        {/* Mika */}

        <div className="text-center">

          <div className="text-[120px]">
            🤖
          </div>

          <p className="font-bold mt-4">
            Mika
          </p>

        </div>

        {/* Whiteboard */}

        <div className="col-span-2">

          <div className="bg-slate-100 rounded-2xl p-8 min-h-[350px]">

            <h2 className="text-3xl font-bold">
              {current.title}
            </h2>

            <p className="mt-6 text-xl">
              🗣 {current.speech}
            </p>

            <div className="mt-6 bg-white rounded-xl p-5">

              <h3 className="font-bold">
                Whiteboard
              </h3>

              <p className="mt-3">
                ✍ {current.boardInstruction}
              </p>

            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-5">

              🎬 {current.animation}

            </div>

          </div>

        </div>

      </div>

      {/* Question */}

      <div className="mt-8 bg-slate-50 rounded-2xl p-6">

        <h2 className="text-2xl font-bold">

          ❓ {current.question}

        </h2>

        <div className="grid grid-cols-2 gap-4 mt-6">

          {current.options.map((option) => (

            <button
              key={option}
              className="border rounded-xl p-4 hover:bg-indigo-100"
            >
              {option}
            </button>

          ))}

        </div>

      </div>

      <div className="flex justify-end mt-8">

        <button
          onClick={() =>
            setStep((s) =>
              Math.min(s + 1, teachingSteps.length - 1)
            )
          }
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl"
        >
          Next →
        </button>

      </div>

    </div>
  );
}