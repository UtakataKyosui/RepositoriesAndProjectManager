import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyIncludeSchema } from "../inputTypeSchemas/ProjectDependencyIncludeSchema";
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

export const ProjectDependencyFindUniqueArgsSchema: z.ZodType<Prisma.ProjectDependencyFindUniqueArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: z.lazy(() => ProjectDependencyIncludeSchema).optional(),
      where: ProjectDependencyWhereUniqueInputSchema,
    })
    .strict();

export default ProjectDependencyFindUniqueArgsSchema;
