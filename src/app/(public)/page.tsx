import Link from "next/link";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export const revalidate = 60;

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
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and open source contributions.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex justify-between items-start gap-2">
                  <span className="break-words">{project.title}</span>
                </CardTitle>
                <CardDescription className="line-clamp-3 min-h-[4.5rem]">
                  {project.description || "No description provided."}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Repositories</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.repositories.map((repo) => (
                      <Link key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer flex items-center gap-1 py-1">
                          <Github className="h-3 w-3" />
                          {repo.name || "Repo"}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">No projects yet</h3>
              <p className="text-muted-foreground">Check back later for updates!</p>
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
