import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalOrderByRelationAggregateInputSchema } from "./RoadmapGoalOrderByRelationAggregateInputSchema";
import { RoadmapProjectOrderByRelationAggregateInputSchema } from "./RoadmapProjectOrderByRelationAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";
import { UserOrderByWithRelationInputSchema } from "./UserOrderByWithRelationInputSchema";

export const RoadmapOrderByWithRelationInputSchema: z.ZodType<Prisma.RoadmapOrderByWithRelationInput> =
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
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    goals: z
      .lazy(() => RoadmapGoalOrderByRelationAggregateInputSchema)
      .optional(),
    projects: z
      .lazy(() => RoadmapProjectOrderByRelationAggregateInputSchema)
      .optional(),
  });

export default RoadmapOrderByWithRelationInputSchema;
