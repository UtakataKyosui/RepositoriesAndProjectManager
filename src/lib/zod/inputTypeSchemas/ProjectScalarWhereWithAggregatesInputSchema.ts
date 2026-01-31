import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolWithAggregatesFilterSchema } from "./BoolWithAggregatesFilterSchema";
import { DateTimeWithAggregatesFilterSchema } from "./DateTimeWithAggregatesFilterSchema";
import { StringNullableWithAggregatesFilterSchema } from "./StringNullableWithAggregatesFilterSchema";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const ProjectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ProjectScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    description: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    published: z
      .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export default ProjectScalarWhereWithAggregatesInputSchema;
