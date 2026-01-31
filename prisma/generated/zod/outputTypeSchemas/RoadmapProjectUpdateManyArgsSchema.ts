import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/RoadmapProjectUncheckedUpdateManyInputSchema";
import { RoadmapProjectUpdateManyMutationInputSchema } from "../inputTypeSchemas/RoadmapProjectUpdateManyMutationInputSchema";
import { RoadmapProjectWhereInputSchema } from "../inputTypeSchemas/RoadmapProjectWhereInputSchema";

export const RoadmapProjectUpdateManyArgsSchema: z.ZodType<Prisma.RoadmapProjectUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapProjectUpdateManyMutationInputSchema,
        RoadmapProjectUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapProjectWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RoadmapProjectUpdateManyArgsSchema;
