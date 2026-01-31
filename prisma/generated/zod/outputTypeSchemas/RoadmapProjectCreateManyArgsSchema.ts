import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectCreateManyInputSchema } from "../inputTypeSchemas/RoadmapProjectCreateManyInputSchema";

export const RoadmapProjectCreateManyArgsSchema: z.ZodType<Prisma.RoadmapProjectCreateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectCreateManyInputSchema,
        RoadmapProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RoadmapProjectCreateManyArgsSchema;
