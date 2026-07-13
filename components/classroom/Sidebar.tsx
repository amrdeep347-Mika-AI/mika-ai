"use client";

interface Chapter {
  id: string;
  title: string;
  topics: string[];
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
  return (
    <aside className="w-80 bg-white border-r overflow-y-auto">

      <div className="p-6 border-b sticky top-0 bg-white">

        <h1 className="text-3xl font-black text-indigo-700">
          Mika AI
        </h1>

        <p className="text-slate-500 mt-2">
          Class 6 Mathematics
        </p>

      </div>

      <div className="p-4">

        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="mb-8"
          >
            <h2 className="font-bold text-lg mb-3 text-slate-800">
              📘 {chapter.title}
            </h2>

            <div className="space-y-2">

              {chapter.topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left p-3 rounded-xl transition ${
                    selectedTopic === topic
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-50 text-slate-700"
                  }`}
                >
                  {topic}
                </button>
              ))}

            </div>
          </div>
        ))}

      </div>

    </aside>
  );
}