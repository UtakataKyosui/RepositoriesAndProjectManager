import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapGoalOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoadmapGoalOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export default RoadmapGoalOrderByRelationAggregateInputSchema;
