import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalIncludeSchema } from "../inputTypeSchemas/RoadmapGoalIncludeSchema";
import { RoadmapGoalOrderByWithRelationInputSchema } from "../inputTypeSchemas/RoadmapGoalOrderByWithRelationInputSchema";
import { RoadmapGoalScalarFieldEnumSchema } from "../inputTypeSchemas/RoadmapGoalScalarFieldEnumSchema";
import { RoadmapGoalWhereInputSchema } from "../inputTypeSchemas/RoadmapGoalWhereInputSchema";
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

export const RoadmapGoalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoadmapGoalFindFirstOrThrowArgs> =
  z
    .object({
      select: RoadmapGoalSelectSchema.optional(),
      include: z.lazy(() => RoadmapGoalIncludeSchema).optional(),
      where: RoadmapGoalWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapGoalOrderByWithRelationInputSchema.array(),
          RoadmapGoalOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RoadmapGoalWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RoadmapGoalScalarFieldEnumSchema,
          RoadmapGoalScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default RoadmapGoalFindFirstOrThrowArgsSchema;
