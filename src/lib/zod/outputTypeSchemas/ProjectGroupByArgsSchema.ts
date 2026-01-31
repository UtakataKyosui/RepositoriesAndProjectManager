import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectOrderByWithAggregationInputSchema } from "../inputTypeSchemas/ProjectOrderByWithAggregationInputSchema";
import { ProjectScalarFieldEnumSchema } from "../inputTypeSchemas/ProjectScalarFieldEnumSchema";
import { ProjectScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/ProjectScalarWhereWithAggregatesInputSchema";
import { ProjectWhereInputSchema } from "../inputTypeSchemas/ProjectWhereInputSchema";

export const ProjectGroupByArgsSchema: z.ZodType<Prisma.ProjectGroupByArgs> = z
  .object({
    where: ProjectWhereInputSchema.optional(),
    orderBy: z
      .union([
        ProjectOrderByWithAggregationInputSchema.array(),
        ProjectOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ProjectScalarFieldEnumSchema.array(),
    having: ProjectScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default ProjectGroupByArgsSchema;
