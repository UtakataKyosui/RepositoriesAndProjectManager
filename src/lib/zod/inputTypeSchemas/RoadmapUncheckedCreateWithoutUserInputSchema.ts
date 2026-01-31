import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema";
import { RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema";

export const RoadmapUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    goals: z
      .lazy(() => RoadmapGoalUncheckedCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema,
      )
      .optional(),
  });

export default RoadmapUncheckedCreateWithoutUserInputSchema;
