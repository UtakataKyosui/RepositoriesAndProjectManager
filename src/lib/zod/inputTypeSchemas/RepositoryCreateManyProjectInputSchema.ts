import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RepositoryCreateManyProjectInputSchema: z.ZodType<Prisma.RepositoryCreateManyProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
  });

export default RepositoryCreateManyProjectInputSchema;
