import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema";
import { RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema";

export const RoadmapCreateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    goals: z
      .lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export default RoadmapCreateWithoutUserInputSchema;
