import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateNestedOneWithoutGoalsInputSchema } from "./RoadmapCreateNestedOneWithoutGoalsInputSchema";

export const RoadmapGoalCreateInputSchema: z.ZodType<Prisma.RoadmapGoalCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    content: z.string(),
    order: z.number().int().optional(),
    isCompleted: z.boolean().optional(),
    roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutGoalsInputSchema),
  });

export default RoadmapGoalCreateInputSchema;
