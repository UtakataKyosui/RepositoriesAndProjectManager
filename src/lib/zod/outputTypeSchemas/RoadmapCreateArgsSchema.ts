import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapCreateInputSchema } from "../inputTypeSchemas/RoadmapCreateInputSchema";
import { RoadmapIncludeSchema } from "../inputTypeSchemas/RoadmapIncludeSchema";
import { RoadmapUncheckedCreateInputSchema } from "../inputTypeSchemas/RoadmapUncheckedCreateInputSchema";
import { RoadmapCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoadmapCountOutputTypeArgsSchema";
import { RoadmapGoalFindManyArgsSchema } from "../outputTypeSchemas/RoadmapGoalFindManyArgsSchema";
import { RoadmapProjectFindManyArgsSchema } from "../outputTypeSchemas/RoadmapProjectFindManyArgsSchema";
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const RoadmapCreateArgsSchema: z.ZodType<Prisma.RoadmapCreateArgs> = z
  .object({
    select: RoadmapSelectSchema.optional(),
    include: z.lazy(() => RoadmapIncludeSchema).optional(),
    data: z.union([
      RoadmapCreateInputSchema,
      RoadmapUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export default RoadmapCreateArgsSchema;
