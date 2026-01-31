import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectWhereInputSchema } from "./RoadmapProjectWhereInputSchema";

export const RoadmapProjectListRelationFilterSchema: z.ZodType<Prisma.RoadmapProjectListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RoadmapProjectWhereInputSchema).optional(),
    some: z.lazy(() => RoadmapProjectWhereInputSchema).optional(),
    none: z.lazy(() => RoadmapProjectWhereInputSchema).optional(),
  });

export default RoadmapProjectListRelationFilterSchema;
