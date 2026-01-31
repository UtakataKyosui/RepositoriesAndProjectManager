import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const ProjectScalarWhereInputSchema: z.ZodType<Prisma.ProjectScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectScalarWhereInputSchema),
        z.lazy(() => ProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectScalarWhereInputSchema),
        z.lazy(() => ProjectScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  });

export default ProjectScalarWhereInputSchema;
