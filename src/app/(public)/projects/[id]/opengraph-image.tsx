import prisma from "@/lib/db/prisma";
import { generateOGImage, OG_SIZE } from "@/lib/og/generate-image";

export const alt = "Project";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: { id, published: true },
    select: { title: true, description: true },
  });

  if (!project) {
    return generateOGImage({
      title: "Project Not Found",
      type: "project",
    });
  }

  return generateOGImage({
    title: project.title,
    type: "project",
    description: project.description ?? undefined,
  });
}
