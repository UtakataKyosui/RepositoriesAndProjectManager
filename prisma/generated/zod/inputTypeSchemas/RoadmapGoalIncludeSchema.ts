import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapArgsSchema } from "../outputTypeSchemas/RoadmapArgsSchema";

export const RoadmapGoalIncludeSchema: z.ZodType<Prisma.RoadmapGoalInclude> = z
  .object({
    roadmap: z.union([z.boolean(), z.lazy(() => RoadmapArgsSchema)]).optional(),
  })
  .strict();

export default RoadmapGoalIncludeSchema;
