import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalWhereInputSchema } from "./RoadmapGoalWhereInputSchema";

export const RoadmapGoalListRelationFilterSchema: z.ZodType<Prisma.RoadmapGoalListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RoadmapGoalWhereInputSchema).optional(),
    some: z.lazy(() => RoadmapGoalWhereInputSchema).optional(),
    none: z.lazy(() => RoadmapGoalWhereInputSchema).optional(),
  });

export default RoadmapGoalListRelationFilterSchema;
