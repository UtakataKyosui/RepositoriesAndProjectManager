import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapProjectCreateManyProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateManyProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
  });

export default RoadmapProjectCreateManyProjectInputSchema;
