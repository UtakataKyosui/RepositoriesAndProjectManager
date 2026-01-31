import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectCreateInputSchema } from "../inputTypeSchemas/RoadmapProjectCreateInputSchema";
import { RoadmapProjectIncludeSchema } from "../inputTypeSchemas/RoadmapProjectIncludeSchema";
import { RoadmapProjectUncheckedCreateInputSchema } from "../inputTypeSchemas/RoadmapProjectUncheckedCreateInputSchema";
import { RoadmapProjectUncheckedUpdateInputSchema } from "../inputTypeSchemas/RoadmapProjectUncheckedUpdateInputSchema";
import { RoadmapProjectUpdateInputSchema } from "../inputTypeSchemas/RoadmapProjectUpdateInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "../inputTypeSchemas/RoadmapProjectWhereUniqueInputSchema";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";
import { RoadmapArgsSchema } from "../outputTypeSchemas/RoadmapArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoadmapProjectSelectSchema: z.ZodType<Prisma.RoadmapProjectSelect> =
  z
    .object({
      id: z.boolean().optional(),
      order: z.boolean().optional(),
      roadmapId: z.boolean().optional(),
      projectId: z.boolean().optional(),
      roadmap: z
        .union([z.boolean(), z.lazy(() => RoadmapArgsSchema)])
        .optional(),
      project: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export const RoadmapProjectUpsertArgsSchema: z.ZodType<Prisma.RoadmapProjectUpsertArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: z.lazy(() => RoadmapProjectIncludeSchema).optional(),
      where: RoadmapProjectWhereUniqueInputSchema,
      create: z.union([
        RoadmapProjectCreateInputSchema,
        RoadmapProjectUncheckedCreateInputSchema,
      ]),
      update: z.union([
        RoadmapProjectUpdateInputSchema,
        RoadmapProjectUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export default RoadmapProjectUpsertArgsSchema;
