import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema } from "./ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema";
import { RoadmapCreateNestedOneWithoutProjectsInputSchema } from "./RoadmapCreateNestedOneWithoutProjectsInputSchema";

export const RoadmapProjectCreateInputSchema: z.ZodType<Prisma.RoadmapProjectCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutProjectsInputSchema),
    project: z.lazy(
      () => ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema,
    ),
  });

export default RoadmapProjectCreateInputSchema;
