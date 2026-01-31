import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema";
import { ProjectDependencyFindManyArgsSchema } from "../outputTypeSchemas/ProjectDependencyFindManyArgsSchema";
import { RepositoryFindManyArgsSchema } from "../outputTypeSchemas/RepositoryFindManyArgsSchema";
import { RoadmapProjectFindManyArgsSchema } from "../outputTypeSchemas/RoadmapProjectFindManyArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";

export const ProjectIncludeSchema: z.ZodType<Prisma.ProjectInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    repositories: z
      .union([z.boolean(), z.lazy(() => RepositoryFindManyArgsSchema)])
      .optional(),
    dependencies: z
      .union([z.boolean(), z.lazy(() => ProjectDependencyFindManyArgsSchema)])
      .optional(),
    dependents: z
      .union([z.boolean(), z.lazy(() => ProjectDependencyFindManyArgsSchema)])
      .optional(),
    roadmapProjects: z
      .union([z.boolean(), z.lazy(() => RoadmapProjectFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProjectCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default ProjectIncludeSchema;
