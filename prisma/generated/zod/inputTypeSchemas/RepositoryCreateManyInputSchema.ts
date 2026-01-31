import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const RepositoryCreateManyInputSchema: z.ZodType<Prisma.RepositoryCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
    projectId: z.string(),
  });

export default RepositoryCreateManyInputSchema;
