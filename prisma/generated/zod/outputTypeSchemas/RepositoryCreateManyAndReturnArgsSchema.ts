import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryCreateManyInputSchema } from "../inputTypeSchemas/RepositoryCreateManyInputSchema";

export const RepositoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RepositoryCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        RepositoryCreateManyInputSchema,
        RepositoryCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default RepositoryCreateManyAndReturnArgsSchema;
