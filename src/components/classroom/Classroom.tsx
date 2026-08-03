"use client";

import MikaClassroom from "./MikaClassroom";

interface ClassroomProps {
  mode?: "demo" | "live";
}

export default function Classroom({
  mode = "live",
}: ClassroomProps) {
  return (
    <MikaClassroom
      mode={mode}
    />
  );
}