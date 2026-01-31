import {
  ArrowLeft,
  ExternalLink,
  Github,
  Link as LinkIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { type GitHubCommit, getRepositoryCommits } from "@/actions/github";
import { CommitList } from "@/components/common/commit-list";
import { DependencyGraphWrapper as DependencyGraph } from "@/components/project/dependency-graph-wrapper";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjectByRepo } from "@/lib/api/vercel";
import prisma from "@/lib/db/prisma";
import { formatRepositoryName } from "@/lib/utils";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await prisma.project.findUnique({
    where: {
      id: id,
      published: true,
    },
    select: {
      title: true,
      description: true,
    },
  });

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  await connection();
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

  // リポジトリごとにVercelプロジェクト情報を取得
  const repositoriesWithVercel = await Promise.all(
    project.repositories.map(async (repo) => {
      const vercelProject = await getProjectByRepo(repo.url);
      return { repo, vercelProject };
    }),
  );

  const deployedRepositories = repositoriesWithVercel.filter(
    (item) => item.vercelProject?.targets?.production,
  );

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

        {/* Depends on section (formerly in grid) */}
        {project.dependents.length > 0 && (
          <div className="mb-8">
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
          </div>
        )}

        {/* Carousel: Repositories & Dependency Graph */}
        <div className="px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Slide 1: Vercel Deployments (Conditional) */}
              {deployedRepositories.length > 0 && (
                <CarouselItem>
                  <div className="h-full p-1">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 1155 1000"
                            className="h-5 w-5 fill-black dark:fill-white"
                            aria-label="Vercel Logo"
                            role="img"
                          >
                            <title>Vercel Logo</title>
                            <path d="M577.344 0L1154.69 1000H0L577.344 0Z" />
                          </svg>
                          Vercel Deployments ({deployedRepositories.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {deployedRepositories.map(
                            ({ repo, vercelProject }) => (
                              <Link
                                key={repo.id}
                                href={`https://${vercelProject?.targets?.production?.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <div className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors bg-black/5 dark:bg-white/5 h-full">
                                  <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                      <p className="font-medium text-sm">
                                        {formatRepositoryName(repo.name || "")}
                                      </p>
                                      <p className="text-xs text-muted-foreground">
                                        {
                                          vercelProject?.targets?.production
                                            ?.url
                                        }
                                      </p>
                                    </div>
                                  </div>
                                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </div>
                              </Link>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )}

              {/* Slide 2: Repositories */}
              <CarouselItem>
                <div className="h-full p-1">
                  {project.repositories.length > 0 ? (
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Github className="h-5 w-5" />
                          Repositories ({project.repositories.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {project.repositories.map(async (repo) => {
                            // 各リポジトリのコミットを取得
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
                                          {formatRepositoryName(
                                            repo.name || "",
                                          )}
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
                  ) : (
                    <Card className="h-full">
                      <CardContent className="py-12 text-center">
                        <Github className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">
                          No repositories linked to this project.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CarouselItem>

              {/* Slide 3: Dependency Graph */}
              <CarouselItem>
                <div className="h-full p-1">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <LinkIcon className="h-5 w-5" />
                        Dependency Graph
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {project.dependencies.length > 0 ||
                      project.dependents.length > 0 ? (
                        <DependencyGraph
                          currentProject={{
                            id: project.id,
                            title: project.title,
                            description: project.description,
                          }}
                          dependencies={project.dependents.map(
                            (d) => d.dependency,
                          )}
                          dependents={project.dependencies.map(
                            (d) => d.dependent,
                          )}
                        />
                      ) : (
                        <div className="py-12 text-center text-muted-foreground">
                          No dependency data to display for graph.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
    </div>
  );
}
