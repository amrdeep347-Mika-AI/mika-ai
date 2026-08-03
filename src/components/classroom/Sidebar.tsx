"use client";

import { useEffect, useState } from "react";

interface Topic {
  id: string;
  name: string;
  slug: string;
}

interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

interface SidebarProps {
  chapters: Chapter[];
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
}

export default function Sidebar({
  chapters,
  selectedTopic,
  setSelectedTopic,
}: SidebarProps) {
  const initialOpenChapter =
  chapters.find((chapter) =>
    chapter.topics.some((topic) => topic.slug === selectedTopic)
  )?.id ?? chapters[0]?.id ?? "";

const [openChapter, setOpenChapter] = useState(initialOpenChapter);
useEffect(() => {
  const chapter = chapters.find((chapter) =>
    chapter.topics.some((topic) => topic.slug === selectedTopic)
  );

  if (chapter) {
    setOpenChapter(chapter.id);
  }
}, [selectedTopic, chapters]);

  return (
    <aside className="w-80 border-r bg-white h-screen overflow-y-auto">

      <div className="sticky top-0 bg-white border-b p-6">
        <h1 className="text-3xl font-black text-indigo-600">
          📚 Mika AI
        </h1>
      </div>

      <div className="p-4">

        {chapters.map((chapter) => {
          const isOpen = openChapter === chapter.id;

          return (
            <div
              key={chapter.id}
              className="mb-4 border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenChapter(isOpen ? "" : chapter.id)
                }
                className="w-full flex items-center justify-between p-4 font-bold bg-slate-100 hover:bg-slate-200 transition"
              >
                <span>{chapter.title}</span>

                <span className="text-xl">
                  {isOpen ? "▼" : "▶"}
                </span>
              </button>

              {isOpen && (
                <div className="p-2">

                  {chapter.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.slug)}
                      className={`block w-full text-left rounded-lg px-3 py-2 mb-1 transition ${
                        selectedTopic === topic.slug
                          ? "bg-indigo-600 text-white"
                          : "hover:bg-slate-100"
                      }`}
                    >
                      {topic.name}
                    </button>
                  ))}

                </div>
              )}
            </div>
          );
        })}

      </div>
    </aside>
  );
}