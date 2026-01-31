import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapOrderByWithAggregationInputSchema } from "../inputTypeSchemas/RoadmapOrderByWithAggregationInputSchema";
import { RoadmapScalarFieldEnumSchema } from "../inputTypeSchemas/RoadmapScalarFieldEnumSchema";
import { RoadmapScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/RoadmapScalarWhereWithAggregatesInputSchema";
import { RoadmapWhereInputSchema } from "../inputTypeSchemas/RoadmapWhereInputSchema";

export const RoadmapGroupByArgsSchema: z.ZodType<Prisma.RoadmapGroupByArgs> = z
  .object({
    where: RoadmapWhereInputSchema.optional(),
    orderBy: z
      .union([
        RoadmapOrderByWithAggregationInputSchema.array(),
        RoadmapOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: RoadmapScalarFieldEnumSchema.array(),
    having: RoadmapScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default RoadmapGroupByArgsSchema;
