import {
  ArrowLeft,
  ExternalLink,
  Github,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type GitHubCommit, getRepositoryCommits } from "@/actions/github";
import { CommitList } from "@/components/common/commit-list";
import { DependencyGraphWrapper as DependencyGraph } from "@/components/project/dependency-graph-wrapper";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { formatRepositoryName } from "@/lib/utils";

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
      dependencies: {
        include: {
          dependent: true,
        },
      },
      dependents: {
        include: {
          dependency: true,
        },
      },
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

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
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
                  <div className="space-y-6">
                    {project.repositories.map(async (repo) => {
                      // 各リポ ジトリのコミットを取得
                      let commits: GitHubCommit[] = [];
                      try {
                        commits = await getRepositoryCommits(repo.url);
                      } catch (error) {
                        console.error(
                          `Failed to fetch commits for ${repo.name}:`,
                          error,
                        );
                      }

                      return (
                        <div key={repo.id} className="space-y-3">
                          <Link
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-3">
                                <Github className="h-5 w-5 text-muted-foreground" />
                                <div>
                                  <p className="font-medium">
                                    {formatRepositoryName(repo.name || "")}
                                  </p>
                                </div>
                              </div>
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            </div>
                          </Link>

                          {/* コミット履歴セクション */}
                          {commits.length > 0 && (
                            <div className="pl-4">
                              <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                                最新のコミット
                              </h4>
                              <CommitList commits={commits} />
                            </div>
                          )}
                        </div>
                      );
                    })}
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
          </div>

          <div className="space-y-8">
            {/* Dependencies Section (Depends on - 自分が依存している) */}
            {project.dependents.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5" />
                    Depends on ({project.dependents.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.dependents.map((dep) => (
                      <Link
                        key={dep.dependencyId}
                        href={`/projects/${dep.dependencyId}`}
                        className="block"
                      >
                        <div className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                          <p className="font-medium">{dep.dependency.title}</p>
                          {dep.dependency.description && (
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {dep.dependency.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Dependents Section (Used by - 自分に依存している) */}
            {project.dependencies.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 rotate-90" />
                    Used by ({project.dependencies.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.dependencies.map((dep) => (
                      <Link
                        key={dep.dependentId}
                        href={`/projects/${dep.dependentId}`}
                        className="block"
                      >
                        <div className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                          <p className="font-medium">{dep.dependent.title}</p>
                          {dep.dependent.description && (
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {dep.dependent.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Dependency Graph */}
        {(project.dependencies.length > 0 || project.dependents.length > 0) && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Dependency Graph
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DependencyGraph
                currentProject={{
                  id: project.id,
                  title: project.title,
                  description: project.description,
                }}
                dependencies={project.dependents.map((d) => d.dependency)}
                dependents={project.dependencies.map((d) => d.dependent)}
              />
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
