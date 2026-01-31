import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const RoadmapScalarWhereInputSchema: z.ZodType<Prisma.RoadmapScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapScalarWhereInputSchema),
        z.lazy(() => RoadmapScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  });

export default RoadmapScalarWhereInputSchema;
