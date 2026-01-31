import { notFound } from "next/navigation";
import { getMyProjects } from "@/actions/project";
import { getRoadmap } from "@/actions/roadmap";
import { GoalManager } from "@/components/roadmap/goal-manager";
import { ManageProjectsDialog } from "@/components/roadmap/manage-projects-dialog";
import { RoadmapDetailsEditor } from "@/components/roadmap/roadmap-details-editor";
import { RoadmapGraphSection } from "@/components/roadmap/roadmap-graph-section";
import { SortableProjectList } from "@/components/roadmap/sortable-project-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth/session";

export default async function AdminRoadmapDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getSession();
  const userId = session?.user?.id;

  const [roadmap, allProjects] = await Promise.all([
    getRoadmap(id),
    userId ? getMyProjects() : Promise.resolve([]),
  ]);

  if (!roadmap) {
    notFound();
  }

  // In Admin path, we assume "Editing" is authorized if the user can access this page (layout checks session)
  // But we still want to ensure ownership (or just allow if it's their roadmap).
  // Strictly speaking, if they are stuck to their own roadmaps in DB, `isOwner` is implicitly true if `getRoadmap` enforces it.
  // We'll stick to `isOwner` for passing to components.
  const isOwner = userId === roadmap.userId;

  // Sort projects by order
  const sortedProjects = [...roadmap.projects].sort(
    (a, b) => a.order - b.order,
  );
  const existingProjectIds = roadmap.projects.map((p) => p.projectId);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Admin Back Link or Standard Layout handles it? - The Admin Layout has nav. We are in content. */}
      <main className="flex-1 container mx-auto flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="flex-1 mr-4">
            <RoadmapDetailsEditor
              id={roadmap.id}
              initialTitle={roadmap.title}
              initialDescription={roadmap.description}
              isOwner={isOwner}
            />
          </div>
          {isOwner && (
            <ManageProjectsDialog
              roadmapId={roadmap.id}
              allProjects={allProjects}
              existingProjectIds={existingProjectIds}
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <RoadmapGraphSection
            projects={sortedProjects}
            goals={roadmap.goals}
          />

          <div className="space-y-6">
            <Card className="h-fit">
              <CardContent className="pt-6">
                <GoalManager
                  roadmapId={roadmap.id}
                  goals={roadmap.goals}
                  isOwner={isOwner}
                />
              </CardContent>
            </Card>

            {isOwner && roadmap.projects.length > 0 && (
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Reorder Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <SortableProjectList
                    roadmapId={roadmap.id}
                    projects={sortedProjects.map((p) => ({
                      projectId: p.projectId,
                      title: p.project.title,
                    }))}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
