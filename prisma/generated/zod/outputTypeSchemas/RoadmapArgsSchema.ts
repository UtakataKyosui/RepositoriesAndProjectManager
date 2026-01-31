import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapIncludeSchema } from "../inputTypeSchemas/RoadmapIncludeSchema";
import { RoadmapSelectSchema } from "../inputTypeSchemas/RoadmapSelectSchema";

export const RoadmapArgsSchema: z.ZodType<Prisma.RoadmapDefaultArgs> = z
  .object({
    select: z.lazy(() => RoadmapSelectSchema).optional(),
    include: z.lazy(() => RoadmapIncludeSchema).optional(),
  })
  .strict();

export default RoadmapArgsSchema;
