import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/RepositoryUncheckedUpdateManyInputSchema";
import { RepositoryUpdateManyMutationInputSchema } from "../inputTypeSchemas/RepositoryUpdateManyMutationInputSchema";
import { RepositoryWhereInputSchema } from "../inputTypeSchemas/RepositoryWhereInputSchema";

export const RepositoryUpdateManyArgsSchema: z.ZodType<Prisma.RepositoryUpdateManyArgs> =
  z
    .object({
      data: z.union([
        RepositoryUpdateManyMutationInputSchema,
        RepositoryUncheckedUpdateManyInputSchema,
      ]),
      where: RepositoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default RepositoryUpdateManyArgsSchema;
