import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryWhereInputSchema } from "../inputTypeSchemas/RepositoryWhereInputSchema";

export const RepositoryDeleteManyArgsSchema: z.ZodType<Prisma.RepositoryDeleteManyArgs> =
  z
    .object({
      where: RepositoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RepositoryDeleteManyArgsSchema;
