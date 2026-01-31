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
import { formatRepositoryName } from "@/lib/utils";
import type { ProjectWithRepositories } from "@/types/project";

interface ProjectCardProps {
  project: ProjectWithRepositories;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
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
                  {formatRepositoryName(repo.name || "") || "Repo"}
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
  );
}
