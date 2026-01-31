import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectDependencyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyMaxOrderByAggregateInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
  });

export default ProjectDependencyMaxOrderByAggregateInputSchema;
