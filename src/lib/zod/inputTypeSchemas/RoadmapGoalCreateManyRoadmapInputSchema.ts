import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapGoalCreateManyRoadmapInputSchema: z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
  });

export default RoadmapGoalCreateManyRoadmapInputSchema;
