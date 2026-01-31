import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapCreateManyInputSchema } from "../inputTypeSchemas/RoadmapCreateManyInputSchema";

export const RoadmapCreateManyArgsSchema: z.ZodType<Prisma.RoadmapCreateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapCreateManyInputSchema,
        RoadmapCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RoadmapCreateManyArgsSchema;
