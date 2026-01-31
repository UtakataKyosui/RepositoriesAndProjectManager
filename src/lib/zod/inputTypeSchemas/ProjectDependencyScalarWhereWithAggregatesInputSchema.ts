import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const ProjectDependencyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectDependencyScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema),
        z
          .lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema),
        z
          .lazy(() => ProjectDependencyScalarWhereWithAggregatesInputSchema)
          .array(),
      ])
      .optional(),
    dependencyId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    dependentId: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
  });

export default ProjectDependencyScalarWhereWithAggregatesInputSchema;
