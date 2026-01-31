import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountListRelationFilterSchema } from "./AccountListRelationFilterSchema";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { ProjectListRelationFilterSchema } from "./ProjectListRelationFilterSchema";
import { RoadmapListRelationFilterSchema } from "./RoadmapListRelationFilterSchema";
import { SessionListRelationFilterSchema } from "./SessionListRelationFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.cuid(),
        email: z.string(),
      }),
      z.object({
        id: z.cuid(),
      }),
      z.object({
        email: z.string(),
      }),
    ])
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        email: z.string().optional(),
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
        name: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
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
      }),
    );

export default UserWhereUniqueInputSchema;
