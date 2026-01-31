import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";
import { RoadmapArgsSchema } from "../outputTypeSchemas/RoadmapArgsSchema";

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

export default RoadmapProjectSelectSchema;
