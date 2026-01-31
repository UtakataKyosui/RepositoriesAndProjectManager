import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectDependencyOrderByWithRelationInputSchema } from "../inputTypeSchemas/ProjectDependencyOrderByWithRelationInputSchema";
import { ProjectDependencyWhereInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "../inputTypeSchemas/ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyAggregateArgsSchema: z.ZodType<Prisma.ProjectDependencyAggregateArgs> =
  z
    .object({
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
    })
    .strict();

export default ProjectDependencyAggregateArgsSchema;
