import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapCreateManyInputSchema: z.ZodType<Prisma.RoadmapCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
  });

export default RoadmapCreateManyInputSchema;
