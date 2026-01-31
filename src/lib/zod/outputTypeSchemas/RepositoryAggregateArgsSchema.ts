import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryOrderByWithRelationInputSchema } from "../inputTypeSchemas/RepositoryOrderByWithRelationInputSchema";
import { RepositoryWhereInputSchema } from "../inputTypeSchemas/RepositoryWhereInputSchema";
import { RepositoryWhereUniqueInputSchema } from "../inputTypeSchemas/RepositoryWhereUniqueInputSchema";

export const RepositoryAggregateArgsSchema: z.ZodType<Prisma.RepositoryAggregateArgs> =
  z
    .object({
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithRelationInputSchema.array(),
          RepositoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RepositoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default RepositoryAggregateArgsSchema;
