import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalWhereInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereInputSchema";

export const RoadmapGoalDeleteManyArgsSchema: z.ZodType<Prisma.RoadmapGoalDeleteManyArgs> =
  z
    .object({
      where: RoadmapGoalWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RoadmapGoalDeleteManyArgsSchema;
