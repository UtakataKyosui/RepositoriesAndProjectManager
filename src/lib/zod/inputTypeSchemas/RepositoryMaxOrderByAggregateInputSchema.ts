import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RepositoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RepositoryMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
  });

export default RepositoryMaxOrderByAggregateInputSchema;
