import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectWhereInputSchema } from "../inputTypeSchemas/RoadmapProjectWhereInputSchema";

export const RoadmapProjectDeleteManyArgsSchema: z.ZodType<Prisma.RoadmapProjectDeleteManyArgs> =
  z
    .object({
      where: RoadmapProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RoadmapProjectDeleteManyArgsSchema;
