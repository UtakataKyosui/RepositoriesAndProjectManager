import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoadmapCountOutputTypeArgsSchema";
import { RoadmapGoalFindManyArgsSchema } from "../outputTypeSchemas/RoadmapGoalFindManyArgsSchema";
import { RoadmapProjectFindManyArgsSchema } from "../outputTypeSchemas/RoadmapProjectFindManyArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";

export const RoadmapSelectSchema: z.ZodType<Prisma.RoadmapSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    goals: z
      .union([z.boolean(), z.lazy(() => RoadmapGoalFindManyArgsSchema)])
      .optional(),
    projects: z
      .union([z.boolean(), z.lazy(() => RoadmapProjectFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RoadmapCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default RoadmapSelectSchema;
