import CourseDetailPage from "@/components/courses/CourseDetailPage";

interface Props {
  params: { courseId: string };
}

export default function Page({ params }: Props) {
  return <CourseDetailPage courseId={params.courseId} />;
}

export function generateStaticParams() {
  return [
    { courseId: "crypto-trading" },
    { courseId: "korean-language" },
    { courseId: "social-media-marketing" },
    { courseId: "graphic-design" },
  ];
}