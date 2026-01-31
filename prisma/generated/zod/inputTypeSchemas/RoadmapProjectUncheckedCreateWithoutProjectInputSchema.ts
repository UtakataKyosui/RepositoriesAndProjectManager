import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapProjectUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmapId: z.string(),
  });

export default RoadmapProjectUncheckedCreateWithoutProjectInputSchema;
