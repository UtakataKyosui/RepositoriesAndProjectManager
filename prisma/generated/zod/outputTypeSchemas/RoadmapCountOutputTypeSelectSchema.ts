import type { Prisma } from "@prisma/client";
import { z } from "zod";

export const RoadmapCountOutputTypeSelectSchema: z.ZodType<Prisma.RoadmapCountOutputTypeSelect> =
  z
    .object({
      goals: z.boolean().optional(),
      projects: z.boolean().optional(),
    })
    .strict();

export default RoadmapCountOutputTypeSelectSchema;
