import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";

export const RoadmapScalarRelationFilterSchema: z.ZodType<Prisma.RoadmapScalarRelationFilter> =
  z.strictObject({
    is: z.lazy(() => RoadmapWhereInputSchema).optional(),
    isNot: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export default RoadmapScalarRelationFilterSchema;
