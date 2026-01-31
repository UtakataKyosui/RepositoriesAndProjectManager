import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectCreateInputSchema } from "../inputTypeSchemas/RoadmapProjectCreateInputSchema";
import { RoadmapProjectIncludeSchema } from "../inputTypeSchemas/RoadmapProjectIncludeSchema";
import { RoadmapProjectUncheckedCreateInputSchema } from "../inputTypeSchemas/RoadmapProjectUncheckedCreateInputSchema";
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

export const RoadmapProjectCreateArgsSchema: z.ZodType<Prisma.RoadmapProjectCreateArgs> =
  z
    .object({
      select: RoadmapProjectSelectSchema.optional(),
      include: z.lazy(() => RoadmapProjectIncludeSchema).optional(),
      data: z.union([
        RoadmapProjectCreateInputSchema,
        RoadmapProjectUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export default RoadmapProjectCreateArgsSchema;
