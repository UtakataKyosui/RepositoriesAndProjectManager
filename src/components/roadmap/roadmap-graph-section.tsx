import { RoadmapGraphWrapper } from "@/components/roadmap/roadmap-graph-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { RoadmapGoal } from "@prisma/client";
import type { RoadmapProjectWithProject } from "@/types/roadmap";

type GraphProject = RoadmapProjectWithProject;

type RoadmapGraphSectionProps = {
  projects: GraphProject[];
  goals: RoadmapGoal[];
};

export function RoadmapGraphSection({
  projects,
  goals,
}: RoadmapGraphSectionProps) {
  return (
    <Card className="lg:col-span-2 flex flex-col">
      <CardHeader>
        <CardTitle>Roadmap Graph</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-[500px] bg-muted/10 rounded-md p-0 overflow-hidden relative">
        <RoadmapGraphWrapper
          projects={projects
            .sort((a, b) => a.order - b.order)
            .map((p) => ({
              id: p.project.id,
              title: p.project.title,
              order: p.order,
              description: p.project.description,
              status: p.project.status,
            }))}
          goals={goals.sort((a, b) => a.order - b.order)}
        />
      </CardContent>
    </Card>
  );
}
