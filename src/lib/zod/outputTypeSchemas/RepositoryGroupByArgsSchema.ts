import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryOrderByWithAggregationInputSchema } from "../inputTypeSchemas/RepositoryOrderByWithAggregationInputSchema";
import { RepositoryScalarFieldEnumSchema } from "../inputTypeSchemas/RepositoryScalarFieldEnumSchema";
import { RepositoryScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/RepositoryScalarWhereWithAggregatesInputSchema";
import { RepositoryWhereInputSchema } from "../inputTypeSchemas/RepositoryWhereInputSchema";

export const RepositoryGroupByArgsSchema: z.ZodType<Prisma.RepositoryGroupByArgs> =
  z
    .object({
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithAggregationInputSchema.array(),
          RepositoryOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: RepositoryScalarFieldEnumSchema.array(),
      having: RepositoryScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RepositoryGroupByArgsSchema;
