import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapProjectCreateManyRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    projectId: z.string(),
  });

export default RoadmapProjectCreateManyRoadmapInputSchema;
