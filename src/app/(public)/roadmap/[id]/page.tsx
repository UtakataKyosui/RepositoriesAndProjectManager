import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getRoadmap } from "@/actions/roadmap";
import { RoadmapGoalsList } from "@/components/roadmap/roadmap-goals-list";
import { RoadmapGraphSection } from "@/components/roadmap/roadmap-graph-section";
import { RoadmapHeader } from "@/components/roadmap/roadmap-header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const roadmap = await getRoadmap(id);

  if (!roadmap) {
    return {
      title: "Roadmap Not Found",
    };
  }

  return {
    title: roadmap.title,
    description: roadmap.description,
  };
}

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await connection();
  const { id } = await params;
  const roadmap = await getRoadmap(id);

  if (!roadmap) {
    notFound();
  }

  // Sort projects by order
  const sortedProjects = [...roadmap.projects].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col gap-6">
        <RoadmapHeader
          title={roadmap.title}
          description={roadmap.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <RoadmapGraphSection
            projects={sortedProjects}
            goals={roadmap.goals}
          />

          <RoadmapGoalsList goals={roadmap.goals} />
        </div>
      </main>
    </div>
  );
}
