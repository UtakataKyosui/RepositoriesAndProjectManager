import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectOrderByWithRelationInputSchema } from "../inputTypeSchemas/RoadmapProjectOrderByWithRelationInputSchema";
import { RoadmapProjectWhereInputSchema } from "../inputTypeSchemas/RoadmapProjectWhereInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "../inputTypeSchemas/RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectAggregateArgsSchema: z.ZodType<Prisma.RoadmapProjectAggregateArgs> =
  z
    .object({
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithRelationInputSchema.array(),
          RoadmapProjectOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapProjectWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RoadmapProjectAggregateArgsSchema;
