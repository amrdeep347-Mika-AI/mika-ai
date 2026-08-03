"use client";

import { useEffect, useRef, useState } from "react";
import { demoLesson } from "@/lib/classroom/demoLesson";
import type { Lesson } from "@/lib/ai/types";
import MikaAvatar from "@/components/classroom/MikaAvatar";
import Whiteboard from "@/components/classroom/Whiteboard";
import ProgressPanel from "@/components/classroom/ProgressPanel";
import QuestionCard from "@/components/classroom/QuestionCard";
import NextButton from "@/components/classroom/NextButton";
import LessonComplete from "@/components/classroom/LessonComplete";
import AskMika from "@/components/classroom/AskMika";
import { WhiteboardCommand } from "@/lib/whiteboard/types";
import VoiceControls from "@/components/classroom/VoiceControls";
import { runActions } from "@/lib/classroom/actionQueue";
import { speak } from "@/lib/speech/speak";
import {
  ClassroomBrain,
  createBrain,
} from "@/lib/classroom/brain";
import Image from "next/image";
import ClassroomHeader from "@/components/classroom/ClassroomHeader";


interface Props {
  classId?: string;
  subjectId?: string;
  chapterId?: string;
  topicId?: string;
  mode?: "demo" | "live";
}

export default function MikaClassroom({
  classId,
  subjectId,
  chapterId,
  topicId,
  mode = "live",
}: Props) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [teachingMode, setTeachingMode] =useState<"teaching" | "answering">("teaching");
  const [commands, setCommands] = useState<WhiteboardCommand[]>([]);
  const commandsRef = useRef<WhiteboardCommand[]>([]);
  const [studentQuestion, setStudentQuestion] = useState("");
  const [messages, setMessages] = useState<
  {
    role: "student" | "mika";
    text: string;
  }[]
>([]);
const [brain, setBrain] =
  useState<ClassroomBrain | null>(null);

const [chatLoading, setChatLoading] = useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);
const [pose, setPose] = useState<
  | "idle"
  | "talking"
  | "thinking"
  | "pointing"
  | "writing"
  | "celebrating"
  | "waving"
>("idle");

useEffect(() => {
  setLoading(true);
  setLesson(null);
  setMessages([]);
  setCommands([]);
  setCurrentStep(0);
  setSelectedAnswer("");
  setShowResult(false);
  setLessonCompleted(false);
  setScore(0);
  setXp(0);
  setCoins(0);

  loadLesson();
}, [classId, subjectId, chapterId, topicId]);

async function nextStep() {
  if (!lesson) return;

  if (currentStep < lesson.teachingSteps.length - 1) {
    setCurrentStep((prev) => prev + 1);
    setCommands([]);
    setShowResult(false);
    setSelectedAnswer("");
  } else {
  await saveProgress();
  setLessonCompleted(true);
}
}
  async function loadLesson() {

  if (mode === "demo") {
    setLesson(demoLesson);
    setBrain(createBrain(demoLesson.title));
    setLoading(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return;
  }

  try {
      const response = await fetch("/api/lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          className: classId,
          subject: subjectId,
          chapter: chapterId,
          topic: topicId,
        }),
      });

      const data = await response.json();
      console.log("CHAT RESPONSE:", data);
if (!response.ok) {
  console.error("Lesson API Error:", data);
  setLesson(null);
  return;
}

if (!data?.teachingSteps || data.teachingSteps.length === 0) {
  console.error("Invalid lesson:", data);
  setLesson(null);
  return;
}

setLesson(data);
setBrain(createBrain(data.title));

window.scrollTo({
  top: 0,
  behavior: "smooth",
});
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
async function askMika() {
  await askQuestion(studentQuestion);

  setStudentQuestion("");
}

async function askQuestion(question: string) {
  if (!lesson || !question.trim()) return;
  const updatedBrain = brain
  ? {
      ...brain,
      currentStep,
      messages: [
        ...brain.messages,
        {
          role: "student",
          text: question,
        },
      ],
    }
  : createBrain(lesson.title);

setBrain(updatedBrain);

  setChatLoading(true);

  try {
    const response = await fetch("/api/classroom-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
  className: classId,
  subject: subjectId,
  chapter: chapterId,
  topic: topicId,

  lessonSpeech: step.speech,

  studentQuestion: question,

  brain: updatedBrain,
}),
    });

    const data = await response.json();

// Show student's question first
setMessages((prev) => [
  ...prev,
  {
    role: "student",
    text: question,
  },
]);

await runActions(data.actions, {

 speak: async (text) => {
  console.log("Mika says:", text);

  await speak(
    text,
    () => setIsSpeaking(true),
    () => setIsSpeaking(false)
  );
},
draw: async (commandsToDraw) => {
  const { animateDrawing } = await import(
    "@/lib/whiteboard/animate"
  );

  const { placeCommand } = await import(
    "@/lib/whiteboard/layout"
  );

  const placedCommands = commandsToDraw.map(placeCommand);

  await animateDrawing(
    commandsRef.current,
    placedCommands,
    (visible) => {
      commandsRef.current = visible;
      setCommands(visible);
    }
  );
},

erase: async () => {
  const { resetLayout } = await import(
    "@/lib/whiteboard/layout"
  );

  resetLayout();

  commandsRef.current = [];
  setCommands([]);
},

  wait: async (duration) => {
    await new Promise((resolve) =>
      setTimeout(resolve, duration)
    );
  },

  animation: async (name) => {
    console.log("Animation:", name);
  },

  question: async (text) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "mika",
        text,
      },
    ]);
  },

});

const mikaMessages = data.actions
  .filter((action: any) => action.type === "speak")
  .map((action: any) => ({
    role: "mika" as const,
    text: action.text,
  }));

setBrain((prev) =>
  prev
    ? {
        ...prev,
        messages: [
          ...prev.messages,
          ...mikaMessages,
        ],
      }
    : prev
);

setTeachingMode("answering");
  } catch (error) {
    console.error(error);
  } finally {
    setChatLoading(false);
  }
}
  function checkAnswer(option: string) {
  setSelectedAnswer(option);
  setShowResult(true);

  if (option === step.correctAnswer) {
  setScore((prev) => prev + 1);
  setXp((prev) => prev + 10);
  setCoins((prev) => prev + 5);
}
}
async function saveProgress() {
  try {
    const response = await fetch("/api/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: "demo-student", // We'll replace this once login is added

        class_id: classId,
        subject_id: subjectId,
        chapter_id: chapterId,
        topic_id: topicId,

        lesson_title: lesson.title,

        score,
        total_questions: lesson.teachingSteps.length,

        xp,
        coins,
      }),
    });

    const result = await response.json();

    console.log("Progress saved:", result);
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
}

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto py-20">
        <div className="text-center">
          <div className="text-7xl animate-bounce">🤖</div>

          <h1 className="text-3xl font-bold mt-6">
  Mika is preparing
</h1>

<p className="mt-3 text-xl font-semibold text-indigo-600">
  {topicId?.replaceAll("-", " ") || "Welcome Lesson"}
</p>

          <p className="text-slate-500 mt-3">
            Checking your previous progress and generating the best lesson.
          </p>
        </div>
      </main>
    );
  }

  if (!lesson) {
    return (
      <main className="max-w-6xl mx-auto py-20">
        <h1 className="text-3xl font-bold">
          Failed to load lesson.
        </h1>
      </main>
    );
  }

  const step = lesson?.teachingSteps?.[currentStep];

if (!step) {
  return (
    <main className="max-w-6xl mx-auto py-20 text-center">
      <h1 className="text-3xl font-bold text-red-600">
        Lesson could not be loaded
      </h1>

      <p className="mt-4 text-slate-500">
        Please try again in a few moments.
      </p>
    </main>
  );
}

  return (
  <main className="max-w-7xl mx-auto py-8 px-6">

  <ClassroomHeader
    title={lesson.title}
    current={currentStep + 1}
    total={lesson.teachingSteps.length}
    xp={xp}
    coins={coins}
  />

    <div className="grid lg:grid-cols-3 gap-8 items-start">

     <div className="lg:col-span-1">
  <MikaAvatar
    speech={step.speech}
    isSpeaking={isSpeaking}
    pose={pose}
  />
</div>

<div className="lg:col-span-2">
  <Whiteboard
    instruction={step.boardInstruction}
    animation={step.animation}
    commands={commands}
  />
</div>

    </div>
    <AskMika
  question={studentQuestion}
  loading={chatLoading}
  onChange={setStudentQuestion}
  onAsk={askMika}
/>
<div className="mt-4">
  <VoiceControls
    onTranscript={async (text) => {
      setStudentQuestion(text);
      await askQuestion(text);
      setStudentQuestion("");
    }}
  />
</div>
{messages.length > 0 && (
  <div className="mt-8 rounded-2xl border bg-white p-6 shadow">

    <h2 className="text-2xl font-bold mb-6">
      Classroom Conversation
    </h2>

    <div className="space-y-5">

      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.role === "student"
              ? "text-right"
              : "text-left"
          }
        >
          <div
            className={`inline-block max-w-xl rounded-2xl px-5 py-4 ${
              message.role === "student"
                ? "bg-indigo-600 text-white"
                : "bg-slate-100"
            }`}
          >
            <div className="font-bold mb-2">
              {message.role === "student"
                ? "👦 You"
                : "🤖 Mika"}
            </div>

            <div className="whitespace-pre-wrap">
              {message.text}
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
)}

    <QuestionCard
  question={step.question}
  options={step.options}
  correctAnswer={step.correctAnswer}
  celebration={step.celebration}
  selectedAnswer={selectedAnswer}
  showResult={showResult}
  onAnswer={checkAnswer}
/>

  {showResult && !lessonCompleted && (
  <NextButton
    isLastStep={
      currentStep === lesson.teachingSteps.length - 1
    }
    onClick={nextStep}
  />
)}
{lessonCompleted && (
  <LessonComplete
  title={lesson.title}
  score={score}
  totalQuestions={lesson.teachingSteps.length}
  xp={xp}
  coins={coins}
/>
)}

  </main>
);
}