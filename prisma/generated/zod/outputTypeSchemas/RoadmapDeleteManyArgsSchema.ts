import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapWhereInputSchema } from "../inputTypeSchemas/RoadmapWhereInputSchema";

export const RoadmapDeleteManyArgsSchema: z.ZodType<Prisma.RoadmapDeleteManyArgs> =
  z
    .object({
      where: RoadmapWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RoadmapDeleteManyArgsSchema;
