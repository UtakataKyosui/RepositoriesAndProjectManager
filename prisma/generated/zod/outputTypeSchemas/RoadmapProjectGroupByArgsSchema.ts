import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RoadmapProjectOrderByWithAggregationInputSchema } from "../inputTypeSchemas/RoadmapProjectOrderByWithAggregationInputSchema";
import { RoadmapProjectScalarFieldEnumSchema } from "../inputTypeSchemas/RoadmapProjectScalarFieldEnumSchema";
import { RoadmapProjectScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/RoadmapProjectScalarWhereWithAggregatesInputSchema";
import { RoadmapProjectWhereInputSchema } from "../inputTypeSchemas/RoadmapProjectWhereInputSchema";

export const RoadmapProjectGroupByArgsSchema: z.ZodType<Prisma.RoadmapProjectGroupByArgs> =
  z
    .object({
      where: RoadmapProjectWhereInputSchema.optional(),
      orderBy: z
        .union([
          RoadmapProjectOrderByWithAggregationInputSchema.array(),
          RoadmapProjectOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: RoadmapProjectScalarFieldEnumSchema.array(),
      having: RoadmapProjectScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RoadmapProjectGroupByArgsSchema;
