import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalCreateInputSchema } from "../inputTypeSchemas/RoadmapGoalCreateInputSchema";
import { RoadmapGoalIncludeSchema } from "../inputTypeSchemas/RoadmapGoalIncludeSchema";
import { RoadmapGoalUncheckedCreateInputSchema } from "../inputTypeSchemas/RoadmapGoalUncheckedCreateInputSchema";
import { RoadmapGoalUncheckedUpdateInputSchema } from "../inputTypeSchemas/RoadmapGoalUncheckedUpdateInputSchema";
import { RoadmapGoalUpdateInputSchema } from "../inputTypeSchemas/RoadmapGoalUpdateInputSchema";
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

export const RoadmapGoalUpsertArgsSchema: z.ZodType<Prisma.RoadmapGoalUpsertArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: z.lazy(() => RoadmapGoalIncludeSchema).optional(),
      where: RoadmapGoalWhereUniqueInputSchema,
      create: z.union([
        RoadmapGoalCreateInputSchema,
        RoadmapGoalUncheckedCreateInputSchema,
      ]),
      update: z.union([
        RoadmapGoalUpdateInputSchema,
        RoadmapGoalUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export default RoadmapGoalUpsertArgsSchema;
