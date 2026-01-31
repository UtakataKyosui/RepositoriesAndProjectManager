import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectAvgOrderByAggregateInputSchema } from "./RoadmapProjectAvgOrderByAggregateInputSchema";
import { RoadmapProjectCountOrderByAggregateInputSchema } from "./RoadmapProjectCountOrderByAggregateInputSchema";
import { RoadmapProjectMaxOrderByAggregateInputSchema } from "./RoadmapProjectMaxOrderByAggregateInputSchema";
import { RoadmapProjectMinOrderByAggregateInputSchema } from "./RoadmapProjectMinOrderByAggregateInputSchema";
import { RoadmapProjectSumOrderByAggregateInputSchema } from "./RoadmapProjectSumOrderByAggregateInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoadmapProjectOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoadmapProjectCountOrderByAggregateInputSchema)
      .optional(),
    _avg: z.lazy(() => RoadmapProjectAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoadmapProjectMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoadmapProjectMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => RoadmapProjectSumOrderByAggregateInputSchema).optional(),
  });

export default RoadmapProjectOrderByWithAggregationInputSchema;
