import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectIncludeSchema } from "../inputTypeSchemas/RoadmapProjectIncludeSchema";
import { RoadmapProjectSelectSchema } from "../inputTypeSchemas/RoadmapProjectSelectSchema";

export const RoadmapProjectArgsSchema: z.ZodType<Prisma.RoadmapProjectDefaultArgs> =
  z
    .object({
      select: z.lazy(() => RoadmapProjectSelectSchema).optional(),
      include: z.lazy(() => RoadmapProjectIncludeSchema).optional(),
    })
    .strict();

export default RoadmapProjectArgsSchema;
