import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { IntFilterSchema } from "./IntFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const RoadmapGoalScalarWhereInputSchema: z.ZodType<Prisma.RoadmapGoalScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapGoalScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    order: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    isCompleted: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    roadmapId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export default RoadmapGoalScalarWhereInputSchema;
