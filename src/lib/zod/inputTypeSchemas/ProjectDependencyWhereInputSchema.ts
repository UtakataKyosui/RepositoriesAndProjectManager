import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectScalarRelationFilterSchema } from "./ProjectScalarRelationFilterSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const ProjectDependencyWhereInputSchema: z.ZodType<Prisma.ProjectDependencyWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectDependencyWhereInputSchema),
        z.lazy(() => ProjectDependencyWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectDependencyWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectDependencyWhereInputSchema),
        z.lazy(() => ProjectDependencyWhereInputSchema).array(),
      ])
      .optional(),
    dependencyId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    dependentId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    dependency: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
    dependent: z
      .union([
        z.lazy(() => ProjectScalarRelationFilterSchema),
        z.lazy(() => ProjectWhereInputSchema),
      ])
      .optional(),
  });

export default ProjectDependencyWhereInputSchema;
