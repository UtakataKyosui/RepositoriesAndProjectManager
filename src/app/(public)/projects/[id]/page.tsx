import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id: id,
      published: true, // 公開されているプロジェクトのみ
    },
    include: {
      repositories: true,
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-xl text-muted-foreground">
            {project.description || "No description provided."}
          </p>
        </div>

        {/* Repositories Section */}
        {project.repositories.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Repositories ({project.repositories.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.repositories.map((repo) => (
                  <Link
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{repo.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {repo.url}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* No Repositories Message */}
        {project.repositories.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Github className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                No repositories linked to this project.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Metadata */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Created:</span>{" "}
              {new Date(project.createdAt).toLocaleDateString()}
            </div>
            <div>
              <span className="font-medium">Last Updated:</span>{" "}
              {new Date(project.updatedAt).toLocaleDateString()}
            </div>
            <div>
              <Badge variant={project.published ? "default" : "secondary"}>
                {project.published ? "Published" : "Draft"}
              </Badge>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
