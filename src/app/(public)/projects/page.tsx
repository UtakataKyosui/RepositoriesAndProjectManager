import { ProjectCard } from "@/components/project/project-card";
import prisma from "@/lib/db/prisma";
import type { ProjectWithRepositories } from "@/types/project";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: {
      published: true,
    },
    include: {
      repositories: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-10 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Projects
          </h2>
          <p className="text-muted-foreground">
            Explore our open source projects and tools.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects as ProjectWithRepositories[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">No projects yet</h3>
              <p className="text-muted-foreground">
                Check back later for updates!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
