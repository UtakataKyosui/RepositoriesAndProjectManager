import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema";
import { UserCreateNestedOneWithoutRoadmapsInputSchema } from "./UserCreateNestedOneWithoutRoadmapsInputSchema";

export const RoadmapCreateWithoutGoalsInputSchema: z.ZodType<Prisma.RoadmapCreateWithoutGoalsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputSchema),
    projects: z
      .lazy(() => RoadmapProjectCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export default RoadmapCreateWithoutGoalsInputSchema;
