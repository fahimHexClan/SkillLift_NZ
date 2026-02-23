import CourseDetailPage from "../../src/components/courses/CourseDetailPage";

interface Props {
  params: Promise<{ courseId: string }>;
}

export default async function Page({ params }: Props) {
  const { courseId } = await params;
  return <CourseDetailPage courseId={courseId} />;
}

export function generateStaticParams() {
  return [
    { courseId: "crypto-trading" },
    { courseId: "korean-language" },
    { courseId: "social-media-marketing" },
    { courseId: "graphic-design" },
  ];
}
