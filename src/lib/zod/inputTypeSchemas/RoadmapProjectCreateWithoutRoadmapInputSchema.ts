import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema } from "./ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema";

export const RoadmapProjectCreateWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectCreateWithoutRoadmapInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    project: z.lazy(
      () => ProjectCreateNestedOneWithoutRoadmapProjectsInputSchema,
    ),
  });

export default RoadmapProjectCreateWithoutRoadmapInputSchema;
