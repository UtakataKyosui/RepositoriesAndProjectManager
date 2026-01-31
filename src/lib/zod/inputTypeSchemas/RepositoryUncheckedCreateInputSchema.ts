import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RepositoryUncheckedCreateInputSchema: z.ZodType<Prisma.RepositoryUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
    projectId: z.string(),
  });

export default RepositoryUncheckedCreateInputSchema;
