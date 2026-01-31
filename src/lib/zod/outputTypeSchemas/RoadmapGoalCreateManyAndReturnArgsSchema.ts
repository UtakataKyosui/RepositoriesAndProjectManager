import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalCreateManyInputSchema } from "../inputTypeSchemas/RoadmapGoalCreateManyInputSchema";

export const RoadmapGoalCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapGoalCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalCreateManyInputSchema,
        RoadmapGoalCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RoadmapGoalCreateManyAndReturnArgsSchema;
