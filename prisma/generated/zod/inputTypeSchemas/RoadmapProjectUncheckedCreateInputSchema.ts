import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapProjectUncheckedCreateInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
    projectId: z.string(),
  });

export default RoadmapProjectUncheckedCreateInputSchema;
