import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapArgsSchema } from "../outputTypeSchemas/RoadmapArgsSchema";

export const RoadmapGoalSelectSchema: z.ZodType<Prisma.RoadmapGoalSelect> = z
  .object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    order: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    roadmapId: z.boolean().optional(),
    roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsSchema)]).optional(),
  })
  .strict();

export default RoadmapGoalSelectSchema;
