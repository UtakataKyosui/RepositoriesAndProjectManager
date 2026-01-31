import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyCreateInputSchema } from "../inputTypeSchemas/ProjectDependencyCreateInputSchema";
import { ProjectDependencyIncludeSchema } from "../inputTypeSchemas/ProjectDependencyIncludeSchema";
import { ProjectDependencyUncheckedCreateInputSchema } from "../inputTypeSchemas/ProjectDependencyUncheckedCreateInputSchema";
import { ProjectDependencyUncheckedUpdateInputSchema } from "../inputTypeSchemas/ProjectDependencyUncheckedUpdateInputSchema";
import { ProjectDependencyUpdateInputSchema } from "../inputTypeSchemas/ProjectDependencyUpdateInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereUniqueInputSchema";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectDependencySelectSchema: z.ZodType<Prisma.ProjectDependencySelect> =
  z
    .object({
      dependencyId: z.boolean().optional(),
      dependentId: z.boolean().optional(),
      dependency: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
      dependent: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export const ProjectDependencyUpsertArgsSchema: z.ZodType<Prisma.ProjectDependencyUpsertArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: z.lazy(() => ProjectDependencyIncludeSchema).optional(),
      where: ProjectDependencyWhereUniqueInputSchema,
      create: z.union([
        ProjectDependencyCreateInputSchema,
        ProjectDependencyUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ProjectDependencyUpdateInputSchema,
        ProjectDependencyUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export default ProjectDependencyUpsertArgsSchema;
