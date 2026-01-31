import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { ProjectDependencyListRelationFilterSchema } from "./ProjectDependencyListRelationFilterSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";
import { RepositoryListRelationFilterSchema } from "./RepositoryListRelationFilterSchema";
import { RoadmapProjectListRelationFilterSchema } from "./RoadmapProjectListRelationFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";
import { StringNullableFilterSchema } from "./StringNullableFilterSchema";
import { UserScalarRelationFilterSchema } from "./UserScalarRelationFilterSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => ProjectWhereInputSchema),
            z.lazy(() => ProjectWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => ProjectWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => ProjectWhereInputSchema),
            z.lazy(() => ProjectWhereInputSchema).array(),
          ])
          .optional(),
        title: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
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
        userId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        user: z
          .union([
            z.lazy(() => UserScalarRelationFilterSchema),
            z.lazy(() => UserWhereInputSchema),
          ])
          .optional(),
        repositories: z
          .lazy(() => RepositoryListRelationFilterSchema)
          .optional(),
        dependencies: z
          .lazy(() => ProjectDependencyListRelationFilterSchema)
          .optional(),
        dependents: z
          .lazy(() => ProjectDependencyListRelationFilterSchema)
          .optional(),
        roadmapProjects: z
          .lazy(() => RoadmapProjectListRelationFilterSchema)
          .optional(),
      }),
    );

export default ProjectWhereUniqueInputSchema;
