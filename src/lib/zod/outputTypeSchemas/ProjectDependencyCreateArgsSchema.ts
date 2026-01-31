import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyCreateInputSchema } from "../inputTypeSchemas/ProjectDependencyCreateInputSchema";
import { ProjectDependencyIncludeSchema } from "../inputTypeSchemas/ProjectDependencyIncludeSchema";
import { ProjectDependencyUncheckedCreateInputSchema } from "../inputTypeSchemas/ProjectDependencyUncheckedCreateInputSchema";
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

export const ProjectDependencyCreateArgsSchema: z.ZodType<Prisma.ProjectDependencyCreateArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: z.lazy(() => ProjectDependencyIncludeSchema).optional(),
      data: z.union([
        ProjectDependencyCreateInputSchema,
        ProjectDependencyUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export default ProjectDependencyCreateArgsSchema;
