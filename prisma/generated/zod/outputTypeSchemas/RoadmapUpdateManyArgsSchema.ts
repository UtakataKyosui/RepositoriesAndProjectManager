import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/RoadmapUncheckedUpdateManyInputSchema";
import { RoadmapUpdateManyMutationInputSchema } from "../inputTypeSchemas/RoadmapUpdateManyMutationInputSchema";
import { RoadmapWhereInputSchema } from "../inputTypeSchemas/RoadmapWhereInputSchema";

export const RoadmapUpdateManyArgsSchema: z.ZodType<Prisma.RoadmapUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RoadmapUpdateManyMutationInputSchema,
        RoadmapUncheckedUpdateManyInputSchema,
      ]),
      where: RoadmapWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RoadmapUpdateManyArgsSchema;
