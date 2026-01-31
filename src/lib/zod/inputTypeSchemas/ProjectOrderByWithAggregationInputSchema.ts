import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCountOrderByAggregateInputSchema } from "./ProjectCountOrderByAggregateInputSchema";
import { ProjectMaxOrderByAggregateInputSchema } from "./ProjectMaxOrderByAggregateInputSchema";
import { ProjectMinOrderByAggregateInputSchema } from "./ProjectMinOrderByAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ProjectCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => ProjectMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => ProjectMinOrderByAggregateInputSchema).optional(),
  });

export default ProjectOrderByWithAggregationInputSchema;
