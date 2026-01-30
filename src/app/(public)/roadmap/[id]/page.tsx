import { CheckCircle2, Circle } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { getMyProjects } from "@/actions/project";
import { getRoadmap } from "@/actions/roadmap";
import { ManageProjectsDialog } from "@/components/roadmap/manage-projects-dialog";
import { RoadmapGraphWrapper } from "@/components/roadmap/roadmap-graph-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getSession();
  if (!session?.user) {
    redirect("/");
  }

  const [roadmap, allProjects] = await Promise.all([
    getRoadmap(id),
    getMyProjects(),
  ]);

  if (!roadmap) {
    notFound();
  }

  // Sort projects by order
  const sortedProjects = [...roadmap.projects].sort(
    (a, b) => a.order - b.order,
  );
  const existingProjectIds = roadmap.projects.map((p) => p.projectId);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{roadmap.title}</h1>
            <p className="text-muted-foreground">{roadmap.description}</p>
          </div>
          <ManageProjectsDialog
            roadmapId={roadmap.id}
            allProjects={allProjects}
            existingProjectIds={existingProjectIds}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader>
              <CardTitle>Roadmap Graph</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[500px] bg-muted/10 rounded-md p-0 overflow-hidden">
              <RoadmapGraphWrapper
                projects={sortedProjects.map((p) => ({
                  id: p.project.id,
                  title: p.project.title,
                  order: p.order,
                  description: p.project.description,
                }))}
              />
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {roadmap.goals.map((goal) => (
                  <li key={goal.id} className="flex items-start gap-3">
                    {goal.isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        goal.isCompleted
                          ? "text-muted-foreground line-through"
                          : ""
                      }
                    >
                      {goal.content}
                    </span>
                  </li>
                ))}
                {roadmap.goals.length === 0 && (
                  <li className="text-muted-foreground italic text-sm">
                    No goals defined
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
