import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getMyRoadmaps } from "@/actions/roadmap";
import { CreateRoadmapDialog } from "@/components/roadmap/create-roadmap-dialog";
import { RoadmapCard } from "@/components/roadmap/roadmap-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";

export default async function AdminDashboard() {
  await connection();
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  const projects = await prisma.project.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      repositories: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const roadmaps = await getMyRoadmaps();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="flex justify-end">
            <Link href="/admin/projects/new">
              <Button>Create New Project</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-500 mb-4 line-clamp-2">
                  {project.description || "No description"}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm px-2 py-1 rounded ${project.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {project.published ? "Published" : "Draft"}
                  </span>
                  <Link href={`/admin/projects/${project.id}`}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  Repositories: {project.repositories.length}
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500">
                No projects found. Create one to get started.
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="roadmaps" className="space-y-6">
          <div className="flex justify-end">
            <CreateRoadmapDialog />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((roadmap) => (
              <RoadmapCard
                key={roadmap.id}
                roadmap={roadmap}
                hrefPrefix="/admin/roadmaps"
              />
            ))}
            {roadmaps.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-500">
                No roadmaps found. Create one to get started.
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
