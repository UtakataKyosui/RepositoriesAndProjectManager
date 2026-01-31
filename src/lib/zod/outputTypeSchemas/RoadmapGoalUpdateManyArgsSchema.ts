import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/RoadmapGoalUncheckedUpdateManyInputSchema";
import { RoadmapGoalUpdateManyMutationInputSchema } from "../inputTypeSchemas/RoadmapGoalUpdateManyMutationInputSchema";
import { RoadmapGoalWhereInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereInputSchema";

export const RoadmapGoalUpdateManyArgsSchema: z.ZodType<Prisma.RoadmapGoalUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapGoalUpdateManyMutationInputSchema,
        RoadmapGoalUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapGoalWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RoadmapGoalUpdateManyArgsSchema;
