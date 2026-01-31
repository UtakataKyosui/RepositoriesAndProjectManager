import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectScalarRelationFilterSchema } from "./ProjectScalarRelationFilterSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const RepositoryWhereInputSchema: z.ZodType<Prisma.RepositoryWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RepositoryWhereInputSchema),
        z.lazy(() => RepositoryWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RepositoryWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RepositoryWhereInputSchema),
        z.lazy(() => RepositoryWhereInputSchema).array(),
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
    project: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
  });

export default RepositoryWhereInputSchema;
