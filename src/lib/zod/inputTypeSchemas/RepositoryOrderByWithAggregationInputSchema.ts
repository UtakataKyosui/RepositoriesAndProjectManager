import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryCountOrderByAggregateInputSchema } from "./RepositoryCountOrderByAggregateInputSchema";
import { RepositoryMaxOrderByAggregateInputSchema } from "./RepositoryMaxOrderByAggregateInputSchema";
import { RepositoryMinOrderByAggregateInputSchema } from "./RepositoryMinOrderByAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RepositoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.RepositoryOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RepositoryCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => RepositoryMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => RepositoryMinOrderByAggregateInputSchema).optional(),
  });

export default RepositoryOrderByWithAggregationInputSchema;
