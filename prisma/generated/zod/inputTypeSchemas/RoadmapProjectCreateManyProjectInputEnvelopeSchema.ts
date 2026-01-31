import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateManyProjectInputSchema } from "./RoadmapProjectCreateManyProjectInputSchema";

export const RoadmapProjectCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RoadmapProjectCreateManyProjectInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => RoadmapProjectCreateManyProjectInputSchema),
      z.lazy(() => RoadmapProjectCreateManyProjectInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export default RoadmapProjectCreateManyProjectInputEnvelopeSchema;
