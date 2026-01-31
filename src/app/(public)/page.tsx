import { getPublicRoadmaps } from "@/actions/roadmap";
import { ProjectCard } from "@/components/project/project-card";
import { RoadmapCard } from "@/components/roadmap/roadmap-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/db/prisma";
import type { ProjectWithRepositories } from "@/types/project";

// ビルド時ではなくリクエスト時にデータベースアクセスする（Vercelビルド環境からDB接続できないため）

export default async function Home() {
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

  const roadmaps = await getPublicRoadmaps();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-10 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            着手中コンテンツ一覧
          </h2>
        </section>

        <Tabs defaultValue="projects" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(projects as ProjectWithRepositories[]).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {projects.length === 0 && (
                <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">
                    No projects yet
                  </h3>
                  <p className="text-muted-foreground">
                    Check back later for updates!
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="roadmaps" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roadmaps.map((roadmap) => (
                <RoadmapCard key={roadmap.id} roadmap={roadmap} />
              ))}
              {roadmaps.length === 0 && (
                <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">
                    No roadmaps yet
                  </h3>
                  <p className="text-muted-foreground">
                    Check back later for updates!
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-8 mt-12 bg-muted/40">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Dev Showcase. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
