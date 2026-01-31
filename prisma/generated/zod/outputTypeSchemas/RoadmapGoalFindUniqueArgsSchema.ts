import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalIncludeSchema } from "../inputTypeSchemas/RoadmapGoalIncludeSchema";
import { RoadmapGoalWhereUniqueInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereUniqueInputSchema";
import { RoadmapArgsSchema } from "../outputTypeSchemas/RoadmapArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const RoadmapGoalFindUniqueArgsSchema: z.ZodType<Prisma.RoadmapGoalFindUniqueArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: z.lazy(() => RoadmapGoalIncludeSchema).optional(),
      where: RoadmapGoalWhereUniqueInputSchema,
    })
    .strict();

export default RoadmapGoalFindUniqueArgsSchema;
