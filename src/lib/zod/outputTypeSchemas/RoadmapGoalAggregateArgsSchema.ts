import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalOrderByWithRelationInputSchema } from "../inputTypeSchemas/RoadmapGoalOrderByWithRelationInputSchema";
import { RoadmapGoalWhereInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereInputSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereUniqueInputSchema";

export const RoadmapGoalAggregateArgsSchema: z.ZodType<Prisma.RoadmapGoalAggregateArgs> =
  z
    .object({
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithRelationInputSchema.array(),
          RoadmapGoalOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapGoalWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RoadmapGoalAggregateArgsSchema;
