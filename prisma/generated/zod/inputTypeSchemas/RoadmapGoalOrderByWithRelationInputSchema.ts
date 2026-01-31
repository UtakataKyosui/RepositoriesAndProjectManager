import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapOrderByWithRelationInputSchema } from "./RoadmapOrderByWithRelationInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapGoalOrderByWithRelationInputSchema: z.ZodType<Prisma.RoadmapGoalOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    isCompleted: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    roadmap: z.lazy(() => RoadmapOrderByWithRelationInputSchema).optional(),
  });

export default RoadmapGoalOrderByWithRelationInputSchema;
