import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectDependencyMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyMinOrderByAggregateInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
  });

export default ProjectDependencyMinOrderByAggregateInputSchema;
