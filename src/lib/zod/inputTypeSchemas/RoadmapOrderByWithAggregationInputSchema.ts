import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCountOrderByAggregateInputSchema } from "./RoadmapCountOrderByAggregateInputSchema";
import { RoadmapMaxOrderByAggregateInputSchema } from "./RoadmapMaxOrderByAggregateInputSchema";
import { RoadmapMinOrderByAggregateInputSchema } from "./RoadmapMinOrderByAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoadmapOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RoadmapCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RoadmapMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RoadmapMinOrderByAggregateInputSchema).optional(),
  });

export default RoadmapOrderByWithAggregationInputSchema;
