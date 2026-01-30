import { Check, Circle } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getRoadmap } from "@/actions/roadmap";
import { RoadmapGraphWrapper } from "@/components/roadmap/roadmap-graph-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="flex justify-between items-start">
          <div className="flex-1 mr-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {roadmap.title}
              </h1>
              {roadmap.description && (
                <p className="text-muted-foreground mt-2">
                  {roadmap.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader>
              <CardTitle>Roadmap Graph</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-[500px] bg-muted/10 rounded-md p-0 overflow-hidden relative">
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

          <div className="space-y-6">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmap.goals
                    .sort((a, b) => a.order - b.order)
                    .map((goal) => (
                      <div
                        key={goal.id}
                        className="flex items-start gap-2 p-3 border rounded-md"
                      >
                        {goal.isCompleted ? (
                          <Check className="h-5 w-5 text-green-500 mt-0.5" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                        )}
                        <span
                          className={
                            goal.isCompleted
                              ? "line-through text-muted-foreground"
                              : ""
                          }
                        >
                          {goal.content}
                        </span>
                      </div>
                    ))}
                  {roadmap.goals.length === 0 && (
                    <div className="text-center text-muted-foreground py-4">
                      No goals defined.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
