import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RepositoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RepositoryOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export default RepositoryOrderByRelationAggregateInputSchema;
