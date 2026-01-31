import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapGoalCreateManyRoadmapInputSchema } from "./RoadmapGoalCreateManyRoadmapInputSchema";

export const RoadmapGoalCreateManyRoadmapInputEnvelopeSchema: z.ZodType<Prisma.RoadmapGoalCreateManyRoadmapInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapGoalCreateManyRoadmapInputSchema),
      z.lazy(() => RoadmapGoalCreateManyRoadmapInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default RoadmapGoalCreateManyRoadmapInputEnvelopeSchema;
