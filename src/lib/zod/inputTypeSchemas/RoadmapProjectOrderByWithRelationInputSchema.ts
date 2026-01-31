import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectOrderByWithRelationInputSchema } from "./ProjectOrderByWithRelationInputSchema";
import { RoadmapOrderByWithRelationInputSchema } from "./RoadmapOrderByWithRelationInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RoadmapProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.RoadmapProjectOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    order: z.lazy(() => SortOrderSchema).optional(),
    roadmapId: z.lazy(() => SortOrderSchema).optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    roadmap: z.lazy(() => RoadmapOrderByWithRelationInputSchema).optional(),
    project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  });

export default RoadmapProjectOrderByWithRelationInputSchema;
