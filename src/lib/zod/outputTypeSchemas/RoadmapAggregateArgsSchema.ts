import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapOrderByWithRelationInputSchema } from "../inputTypeSchemas/RoadmapOrderByWithRelationInputSchema";
import { RoadmapWhereInputSchema } from "../inputTypeSchemas/RoadmapWhereInputSchema";
import { RoadmapWhereUniqueInputSchema } from "../inputTypeSchemas/RoadmapWhereUniqueInputSchema";

export const RoadmapAggregateArgsSchema: z.ZodType<Prisma.RoadmapAggregateArgs> =
  z
    .object({
      where: RoadmapWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapOrderByWithRelationInputSchema.array(),
          RoadmapOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RoadmapAggregateArgsSchema;
