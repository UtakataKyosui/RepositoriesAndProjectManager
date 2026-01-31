import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyIncludeSchema } from "../inputTypeSchemas/ProjectDependencyIncludeSchema";
import { ProjectDependencyOrderByWithRelationInputSchema } from "../inputTypeSchemas/ProjectDependencyOrderByWithRelationInputSchema";
import { ProjectDependencyScalarFieldEnumSchema } from "../inputTypeSchemas/ProjectDependencyScalarFieldEnumSchema";
import { ProjectDependencyWhereInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereInputSchema";
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

export const ProjectDependencyFindManyArgsSchema: z.ZodType<Prisma.ProjectDependencyFindManyArgs> =
  z
    .object({
      select: ProjectDependencySelectSchema.optional(),
      include: z.lazy(() => ProjectDependencyIncludeSchema).optional(),
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithRelationInputSchema.array(),
          ProjectDependencyOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectDependencyWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProjectDependencyScalarFieldEnumSchema,
          ProjectDependencyScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default ProjectDependencyFindManyArgsSchema;
