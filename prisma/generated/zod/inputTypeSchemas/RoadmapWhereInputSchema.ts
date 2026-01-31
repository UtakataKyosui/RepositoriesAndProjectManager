import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { RoadmapGoalListRelationFilterSchema } from "./RoadmapGoalListRelationFilterSchema";
import { RoadmapProjectListRelationFilterSchema } from "./RoadmapProjectListRelationFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";
import { UserScalarRelationFilterSchema } from "./UserScalarRelationFilterSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const RoadmapWhereInputSchema: z.ZodType<Prisma.RoadmapWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => RoadmapWhereInputSchema),
        z.lazy(() => RoadmapWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoadmapWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoadmapWhereInputSchema),
        z.lazy(() => RoadmapWhereInputSchema).array(),
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
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    goals: z.lazy(() => RoadmapGoalListRelationFilterSchema).optional(),
    projects: z.lazy(() => RoadmapProjectListRelationFilterSchema).optional(),
  });

export default RoadmapWhereInputSchema;
