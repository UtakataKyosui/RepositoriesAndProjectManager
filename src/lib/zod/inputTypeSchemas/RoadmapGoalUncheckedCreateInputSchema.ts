import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapGoalUncheckedCreateInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.string(),
  });

export default RoadmapGoalUncheckedCreateInputSchema;
