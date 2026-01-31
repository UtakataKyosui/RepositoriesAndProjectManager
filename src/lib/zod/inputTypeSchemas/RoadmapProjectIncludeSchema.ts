import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";
import { RoadmapArgsSchema } from "../outputTypeSchemas/RoadmapArgsSchema";

export const RoadmapProjectIncludeSchema: z.ZodType<Prisma.RoadmapProjectInclude> =
  z
    .object({
      roadmap: z
        .union([z.boolean(), z.lazy(() => RoadmapArgsSchema)])
        .optional(),
      project: z
        .union([z.boolean(), z.lazy(() => ProjectArgsSchema)])
        .optional(),
    })
    .strict();

export default RoadmapProjectIncludeSchema;
