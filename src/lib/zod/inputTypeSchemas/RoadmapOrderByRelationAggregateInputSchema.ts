import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoadmapOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export default RoadmapOrderByRelationAggregateInputSchema;
