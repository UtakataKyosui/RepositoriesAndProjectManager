import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapGoalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalAvgOrderByAggregateInput> =
  z.strictObject({
    order: z.lazy(() => SortOrderSchema).optional(),
  });

export default RoadmapGoalAvgOrderByAggregateInputSchema;
