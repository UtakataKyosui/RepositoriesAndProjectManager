import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RepositoryCreateWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
  });

export default RepositoryCreateWithoutProjectInputSchema;
