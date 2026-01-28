import type { Project, Repository } from "@prisma/client";
import { Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import prisma from "@/lib/prisma";

type ProjectWithRepositories = Project & { repositories: Repository[] };

// ビルド時ではなくリクエスト時にデータベースアクセスする（Vercelビルド環境からDB接続できないため）
export const dynamic = "force-dynamic";
export const revalidate = 0;

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            着手中コンテンツ一覧
          </h2>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects as ProjectWithRepositories[]).map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-start gap-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="hover:underline break-words"
                  >
                    {project.title}
                  </Link>
                </CardTitle>
                <CardDescription className="h-[5rem]">
                  <ScrollArea className="h-full w-full rounded-md border bg-muted/20 p-2">
                    {project.description || "No description provided."}
                  </ScrollArea>
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Repositories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.repositories.slice(0, 3).map((repo) => (
                      <Link
                        key={repo.id}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer flex items-center gap-1 py-1"
                        >
                          <Github className="h-3 w-3" />
                          {repo.name || "Repo"}
                        </Badge>
                      </Link>
                    ))}
                    {project.repositories.length > 3 && (
                      <Badge variant="outline">
                        +{project.repositories.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                <Link href={`/projects/${project.id}`} className="block">
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted transition-colors"
                  >
                    View Details
                  </button>
                </Link>
              </CardContent>
            </Card>
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

      <footer className="border-t py-8 mt-12 bg-muted/40">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Dev Showcase. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
