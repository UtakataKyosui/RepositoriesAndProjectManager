import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectScalarRelationFilterSchema } from "./ProjectScalarRelationFilterSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";
import { RepositoryWhereInputSchema } from "./RepositoryWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const RepositoryWhereUniqueInputSchema: z.ZodType<Prisma.RepositoryWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
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
      }),
    );

export default RepositoryWhereUniqueInputSchema;
