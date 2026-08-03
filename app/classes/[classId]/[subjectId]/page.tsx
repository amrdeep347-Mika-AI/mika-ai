import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ClassroomLayout from "@/components/classroom/ClassroomLayout";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{
    classId: string;
    subjectId: string;
  }>;
}) {
  const { classId, subjectId } = await params;

  // Find class
  const { data: cls } = await supabase
    .from("classes")
    .select("*")
    .eq("slug", classId)
    .single();

  if (!cls) {
    return <div className="p-10">Class not found</div>;
  }

  // Find subject
  const { data: subject } = await supabase
    .from("subjects")
    .select("*")
    .eq("class_id", cls.id)
    .eq("slug", subjectId)
    .single();

  if (!subject) {
    return <div className="p-10">Subject not found</div>;
  }

  // Get chapters
  const { data: chapters } = await supabase
    .from("chapters")
    .select("*")
    .eq("subject_id", subject.id)
    .order("chapter_number");

    // Get topics
const { data: topics } = await supabase
  .from("topics")
  .select("*")
  .order("name");

  const curriculum =
  chapters?.map((chapter) => ({
    ...chapter,
    topics:
      topics?.filter(
        (topic) => topic.chapter_id === chapter.id
      ) || [],
  })) || [];
  console.log(curriculum);
  return (
  <ClassroomLayout
    classSlug={cls.slug}
    subjectSlug={subject.slug}
    chapters={curriculum}
  />
);
}