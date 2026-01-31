import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RepositoryUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUncheckedCreateWithoutProjectInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
  });

export default RepositoryUncheckedCreateWithoutProjectInputSchema;
