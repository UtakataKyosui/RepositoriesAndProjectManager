import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapCreateNestedOneWithoutProjectsInputSchema } from "./RoadmapCreateNestedOneWithoutProjectsInputSchema";

export const RoadmapProjectCreateWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    order: z.number().int().optional(),
    roadmap: z.lazy(() => RoadmapCreateNestedOneWithoutProjectsInputSchema),
  });

export default RoadmapProjectCreateWithoutProjectInputSchema;
