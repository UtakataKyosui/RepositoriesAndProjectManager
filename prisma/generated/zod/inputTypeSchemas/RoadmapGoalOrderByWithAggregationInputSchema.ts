import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalAvgOrderByAggregateInputSchema } from "./RoadmapGoalAvgOrderByAggregateInputSchema";
import { RoadmapGoalCountOrderByAggregateInputSchema } from "./RoadmapGoalCountOrderByAggregateInputSchema";
import { RoadmapGoalMaxOrderByAggregateInputSchema } from "./RoadmapGoalMaxOrderByAggregateInputSchema";
import { RoadmapGoalMinOrderByAggregateInputSchema } from "./RoadmapGoalMinOrderByAggregateInputSchema";
import { RoadmapGoalSumOrderByAggregateInputSchema } from "./RoadmapGoalSumOrderByAggregateInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapGoalOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoadmapGoalOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoadmapGoalCountOrderByAggregateInputSchema)
      .optional(),
    _avg: z.lazy(() => RoadmapGoalAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoadmapGoalMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoadmapGoalMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => RoadmapGoalSumOrderByAggregateInputSchema).optional(),
  });

export default RoadmapGoalOrderByWithAggregationInputSchema;
