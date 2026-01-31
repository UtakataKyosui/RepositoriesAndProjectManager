import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapGoalSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalSumOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export default RoadmapGoalSumOrderByAggregateInputSchema;
