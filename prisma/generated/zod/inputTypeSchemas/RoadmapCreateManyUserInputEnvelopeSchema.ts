import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateManyUserInputSchema } from "./RoadmapCreateManyUserInputSchema";

export const RoadmapCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RoadmapCreateManyUserInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapCreateManyUserInputSchema),
      z.lazy(() => RoadmapCreateManyUserInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default RoadmapCreateManyUserInputEnvelopeSchema;
