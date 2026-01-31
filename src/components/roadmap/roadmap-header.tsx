import type React from "react";

type RoadmapHeaderProps = {
  title: string;
  description: string | null;
};

export function RoadmapHeader({ title, description }: RoadmapHeaderProps) {
  return (
    <div className="flex justify-between items-start">
      <div className="flex-1 mr-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
