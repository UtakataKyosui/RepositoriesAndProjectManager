import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    projectId: z.string(),
  });

export default RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema;
