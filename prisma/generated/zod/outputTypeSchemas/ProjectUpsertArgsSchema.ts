import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectCreateInputSchema } from "../inputTypeSchemas/ProjectCreateInputSchema";
import { ProjectIncludeSchema } from "../inputTypeSchemas/ProjectIncludeSchema";
import { ProjectUncheckedCreateInputSchema } from "../inputTypeSchemas/ProjectUncheckedCreateInputSchema";
import { ProjectUncheckedUpdateInputSchema } from "../inputTypeSchemas/ProjectUncheckedUpdateInputSchema";
import { ProjectUpdateInputSchema } from "../inputTypeSchemas/ProjectUpdateInputSchema";
import { ProjectWhereUniqueInputSchema } from "../inputTypeSchemas/ProjectWhereUniqueInputSchema";
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema";
import { ProjectDependencyFindManyArgsSchema } from "../outputTypeSchemas/ProjectDependencyFindManyArgsSchema";
import { RepositoryFindManyArgsSchema } from "../outputTypeSchemas/RepositoryFindManyArgsSchema";
import { RoadmapProjectFindManyArgsSchema } from "../outputTypeSchemas/RoadmapProjectFindManyArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectSelectSchema: z.ZodType<Prisma.ProjectSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    published: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
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

export const ProjectUpsertArgsSchema: z.ZodType<Prisma.ProjectUpsertArgs> = z
  .object({
    select: ProjectSelectSchema.optional(),
    include: z.lazy(() => ProjectIncludeSchema).optional(),
    where: ProjectWhereUniqueInputSchema,
    create: z.union([
      ProjectCreateInputSchema,
      ProjectUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ProjectUpdateInputSchema,
      ProjectUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export default ProjectUpsertArgsSchema;
