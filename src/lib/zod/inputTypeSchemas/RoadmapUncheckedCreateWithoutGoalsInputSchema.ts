import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema";

export const RoadmapUncheckedCreateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapUncheckedCreateWithoutGoalsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    projects: z
      .lazy(
        () => RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema,
      )
      .optional(),
  });

export default RoadmapUncheckedCreateWithoutGoalsInputSchema;
