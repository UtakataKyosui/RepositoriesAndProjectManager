import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapGoalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
  });

export default RoadmapGoalMaxOrderByAggregateInputSchema;
