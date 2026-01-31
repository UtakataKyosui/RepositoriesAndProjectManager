import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringFilterSchema } from "./StringFilterSchema";

export const ProjectDependencyScalarWhereInputSchema: z.ZodType<Prisma.ProjectDependencyScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectDependencyScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
    dependencyId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    dependentId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  });

export default ProjectDependencyScalarWhereInputSchema;
