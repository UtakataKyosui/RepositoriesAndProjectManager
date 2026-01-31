import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapProjectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapProjectAvgOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export default RoadmapProjectAvgOrderByAggregateInputSchema;
