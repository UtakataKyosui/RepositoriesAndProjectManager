import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectOrderByWithRelationInputSchema } from "../inputTypeSchemas/ProjectOrderByWithRelationInputSchema";
import { ProjectWhereInputSchema } from "../inputTypeSchemas/ProjectWhereInputSchema";
import { ProjectWhereUniqueInputSchema } from "../inputTypeSchemas/ProjectWhereUniqueInputSchema";

export const ProjectAggregateArgsSchema: z.ZodType<Prisma.ProjectAggregateArgs> =
  z
    .object({
      where: ProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProjectOrderByWithRelationInputSchema.array(),
          ProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default ProjectAggregateArgsSchema;
