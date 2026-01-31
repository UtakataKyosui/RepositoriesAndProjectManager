import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapGoalIncludeSchema } from "../inputTypeSchemas/RoadmapGoalIncludeSchema";
import { RoadmapGoalSelectSchema } from "../inputTypeSchemas/RoadmapGoalSelectSchema";

export const RoadmapGoalArgsSchema: z.ZodType<Prisma.RoadmapGoalDefaultArgs> = z
  .object({
    select: z.lazy(() => RoadmapGoalSelectSchema).optional(),
    include: z.lazy(() => RoadmapGoalIncludeSchema).optional(),
  })
  .strict();

export default RoadmapGoalArgsSchema;
