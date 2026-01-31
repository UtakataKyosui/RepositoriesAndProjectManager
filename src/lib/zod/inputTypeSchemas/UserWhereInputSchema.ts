import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountListRelationFilterSchema } from "./AccountListRelationFilterSchema";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { ProjectListRelationFilterSchema } from "./ProjectListRelationFilterSchema";
import { RoadmapListRelationFilterSchema } from "./RoadmapListRelationFilterSchema";
import { SessionListRelationFilterSchema } from "./SessionListRelationFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    emailVerified: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
    accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
    projects: z.lazy(() => ProjectListRelationFilterSchema).optional(),
    roadmaps: z.lazy(() => RoadmapListRelationFilterSchema).optional(),
  });

export default UserWhereInputSchema;
