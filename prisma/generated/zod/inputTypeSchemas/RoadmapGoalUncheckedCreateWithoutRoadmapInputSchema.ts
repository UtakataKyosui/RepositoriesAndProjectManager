import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalUncheckedCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
  });

export default RoadmapGoalUncheckedCreateWithoutRoadmapInputSchema;
