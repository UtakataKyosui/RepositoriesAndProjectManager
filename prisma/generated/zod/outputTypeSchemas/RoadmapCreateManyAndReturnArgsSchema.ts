import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapCreateManyInputSchema } from "../inputTypeSchemas/RoadmapCreateManyInputSchema";

export const RoadmapCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapCreateManyInputSchema,
        RoadmapCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RoadmapCreateManyAndReturnArgsSchema;
