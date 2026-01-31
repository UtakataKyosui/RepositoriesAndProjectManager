import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectCreateManyInputSchema } from "../inputTypeSchemas/RoadmapProjectCreateManyInputSchema";

export const RoadmapProjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoadmapProjectCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectCreateManyInputSchema,
        RoadmapProjectCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RoadmapProjectCreateManyAndReturnArgsSchema;
