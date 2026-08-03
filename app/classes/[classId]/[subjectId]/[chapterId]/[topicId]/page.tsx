import MikaClassroom from "@/components/classroom/MikaClassroom";

export default async function Page({
  params,
}: {
  params: Promise<{
    classId: string;
    subjectId: string;
    chapterId: string;
    topicId: string;
  }>;
}) {
  const p = await params;

  return (
    <MikaClassroom
      classId={p.classId}
      subjectId={p.subjectId}
      chapterId={p.chapterId}
      topicId={p.topicId}
    />
  );
}