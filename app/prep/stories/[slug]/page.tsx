import { storyTemplates } from "@/lib/data/stories";
import StoryDetailClient from "./story-detail-client";

export function generateStaticParams() {
  return storyTemplates.map((template) => ({
    slug: template.slug,
  }));
}

export default async function StoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <StoryDetailClient slug={slug} />;
}
