import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyOrderByWithAggregationInputSchema } from "../inputTypeSchemas/ProjectDependencyOrderByWithAggregationInputSchema";
import { ProjectDependencyScalarFieldEnumSchema } from "../inputTypeSchemas/ProjectDependencyScalarFieldEnumSchema";
import { ProjectDependencyScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/ProjectDependencyScalarWhereWithAggregatesInputSchema";
import { ProjectDependencyWhereInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereInputSchema";

export const ProjectDependencyGroupByArgsSchema: z.ZodType<Prisma.ProjectDependencyGroupByArgs> =
  z
    .object({
      where: ProjectDependencyWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectDependencyOrderByWithAggregationInputSchema.array(),
          ProjectDependencyOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ProjectDependencyScalarFieldEnumSchema.array(),
      having: ProjectDependencyScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default ProjectDependencyGroupByArgsSchema;
