import type { Project, Roadmap, RoadmapGoal, RoadmapProject } from "@/lib/zod";

export type RoadmapProjectWithProject = RoadmapProject & {
  project: Project;
};

export type RoadmapWithRelations = Roadmap & {
  projects: RoadmapProjectWithProject[];
  goals: RoadmapGoal[];
};
