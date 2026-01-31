import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateManyRoadmapInputSchema } from "./RoadmapProjectCreateManyRoadmapInputSchema";

export const RoadmapProjectCreateManyRoadmapInputEnvelopeSchema: z.ZodType<Prisma.RoadmapProjectCreateManyRoadmapInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapProjectCreateManyRoadmapInputSchema),
      z.lazy(() => RoadmapProjectCreateManyRoadmapInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default RoadmapProjectCreateManyRoadmapInputEnvelopeSchema;
