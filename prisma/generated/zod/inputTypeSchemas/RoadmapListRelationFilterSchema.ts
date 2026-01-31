import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";

export const RoadmapListRelationFilterSchema: z.ZodType<Prisma.RoadmapListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RoadmapWhereInputSchema).optional(),
    some: z.lazy(() => RoadmapWhereInputSchema).optional(),
    none: z.lazy(() => RoadmapWhereInputSchema).optional(),
  });

export default RoadmapListRelationFilterSchema;
