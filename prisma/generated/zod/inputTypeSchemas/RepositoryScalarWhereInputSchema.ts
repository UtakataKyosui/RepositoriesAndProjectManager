import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const RepositoryScalarWhereInputSchema: z.ZodType<Prisma.RepositoryScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepositoryScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    projectId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export default RepositoryScalarWhereInputSchema;
