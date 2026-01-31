import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryWhereInputSchema } from "./RepositoryWhereInputSchema";

export const RepositoryListRelationFilterSchema: z.ZodType<Prisma.RepositoryListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => RepositoryWhereInputSchema).optional(),
    some: z.lazy(() => RepositoryWhereInputSchema).optional(),
    none: z.lazy(() => RepositoryWhereInputSchema).optional(),
  });

export default RepositoryListRelationFilterSchema;
