import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { RoadmapWithRelations } from "@/types/roadmap";

type RoadmapCardProps = {
  roadmap: RoadmapWithRelations;
};

export function RoadmapCard({
  roadmap,
  hrefPrefix = "/roadmap",
}: RoadmapCardProps & { hrefPrefix?: string }) {
  return (
    <Link href={`${hrefPrefix}/${roadmap.id}`}>
      <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="line-clamp-1">{roadmap.title}</CardTitle>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {formatDistanceToNow(new Date(roadmap.updatedAt), {
                addSuffix: true,
              })}
            </span>
          </div>
          <CardDescription className="line-clamp-2 min-h-[40px]">
            {roadmap.description || "No description"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 text-xs">
            <Badge variant="secondary">
              {roadmap.projects.length} Projects
            </Badge>
            <Badge variant="outline">{roadmap.goals.length} Goals</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
