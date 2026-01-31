import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalCreateManyInputSchema } from "../inputTypeSchemas/RoadmapGoalCreateManyInputSchema";

export const RoadmapGoalCreateManyArgsSchema: z.ZodType<Prisma.RoadmapGoalCreateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalCreateManyInputSchema,
        RoadmapGoalCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RoadmapGoalCreateManyArgsSchema;
