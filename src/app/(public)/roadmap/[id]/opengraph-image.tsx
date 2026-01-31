import prisma from "@/lib/db/prisma";
import { generateOGImage, OG_SIZE } from "@/lib/og/generate-image";

export const alt = "Roadmap";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const roadmap = await prisma.roadmap.findUnique({
    where: { id, published: true },
    select: { title: true, description: true },
  });

  if (!roadmap) {
    return generateOGImage({
      title: "Roadmap Not Found",
      type: "roadmap",
    });
  }

  return generateOGImage({
    title: roadmap.title,
    type: "roadmap",
    description: roadmap.description ?? undefined,
  });
}
