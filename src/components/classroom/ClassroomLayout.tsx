"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MikaClassroom from "./MikaClassroom";


interface Topic {
  id: string;
  name: string;
  slug: string;
}

interface Chapter {
  id: string;
  name: string;
  topics: Topic[];
}

interface Props {
  classSlug: string;
  subjectSlug: string;
  chapters: Chapter[];
}

export default function ClassroomLayout({
  classSlug,
  subjectSlug,
  chapters,
}: Props) {
  const firstTopic = chapters[0]?.topics[0];

  const STORAGE_KEY = `${classSlug}-${subjectSlug}-last-topic`;

const [selectedTopic, setSelectedTopic] = useState(() => {
  if (typeof window !== "undefined") {
    return (
      localStorage.getItem(STORAGE_KEY) ||
      firstTopic?.slug ||
      ""
    );

    useEffect(() => {
  if (selectedTopic) {
    localStorage.setItem(STORAGE_KEY, selectedTopic);
  }
}, [selectedTopic, STORAGE_KEY]);
  }

  return firstTopic?.slug || "";
});

  const currentChapter =
    chapters.find((chapter) =>
      chapter.topics.some(
        (topic) => topic.slug === selectedTopic
      )
    ) || chapters[0];

  return (
    <div className="flex h-screen">

      <Sidebar
  chapters={chapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.name,
    topics: chapter.topics,   // <-- NEW
  }))}
  selectedTopic={selectedTopic}
  setSelectedTopic={setSelectedTopic}
/>

      <div className="flex-1 overflow-auto p-8">

        {selectedTopic && (
          <MikaClassroom
            classId={classSlug}
            subjectId={subjectSlug}
            chapterId={currentChapter.slug}
            topicId={selectedTopic}
          />
        )}

      </div>

    </div>
  );
}