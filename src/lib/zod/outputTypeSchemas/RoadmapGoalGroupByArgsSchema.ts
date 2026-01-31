import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalOrderByWithAggregationInputSchema } from "../inputTypeSchemas/RoadmapGoalOrderByWithAggregationInputSchema";
import { RoadmapGoalScalarFieldEnumSchema } from "../inputTypeSchemas/RoadmapGoalScalarFieldEnumSchema";
import { RoadmapGoalScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/RoadmapGoalScalarWhereWithAggregatesInputSchema";
import { RoadmapGoalWhereInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereInputSchema";

export const RoadmapGoalGroupByArgsSchema: z.ZodType<Prisma.RoadmapGoalGroupByArgs> =
  z
    .object({
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithAggregationInputSchema.array(),
          RoadmapGoalOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: RoadmapGoalScalarFieldEnumSchema.array(),
      having: RoadmapGoalScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RoadmapGoalGroupByArgsSchema;
