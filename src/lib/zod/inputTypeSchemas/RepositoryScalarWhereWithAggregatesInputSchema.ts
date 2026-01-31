import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringNullableWithAggregatesFilterSchema } from "./StringNullableWithAggregatesFilterSchema";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const RepositoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RepositoryScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepositoryScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema),
        z.lazy(() => RepositoryScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    url: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    name: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    projectId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export default RepositoryScalarWhereWithAggregatesInputSchema;
