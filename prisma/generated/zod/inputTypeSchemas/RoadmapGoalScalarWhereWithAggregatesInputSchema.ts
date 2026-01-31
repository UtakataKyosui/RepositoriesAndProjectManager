import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolWithAggregatesFilterSchema } from "./BoolWithAggregatesFilterSchema";
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const RoadmapGoalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoadmapGoalScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RoadmapGoalScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    order: z
      .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
      .optional(),
    isCompleted: z
      .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
      .optional(),
    roadmapId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export default RoadmapGoalScalarWhereWithAggregatesInputSchema;
