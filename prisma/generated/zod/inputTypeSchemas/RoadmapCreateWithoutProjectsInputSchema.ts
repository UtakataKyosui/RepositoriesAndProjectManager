import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema } from "./RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema";
import { UserCreateNestedOneWithoutRoadmapsInputSchema } from "./UserCreateNestedOneWithoutRoadmapsInputSchema";

export const RoadmapCreateWithoutProjectsInputSchema: z.ZodType<Prisma.RoadmapCreateWithoutProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRoadmapsInputSchema),
    goals: z
      .lazy(() => RoadmapGoalCreateNestedManyWithoutRoadmapInputSchema)
      .optional(),
  });

export default RoadmapCreateWithoutProjectsInputSchema;
