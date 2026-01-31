import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.RoadmapProjectRoadmapIdProjectIdCompoundUniqueInput> =
  z.strictObject({
    roadmapId: z.string(),
    projectId: z.string(),
  });

export default RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema;
