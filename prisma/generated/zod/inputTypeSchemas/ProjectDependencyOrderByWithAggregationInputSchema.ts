import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCountOrderByAggregateInputSchema } from "./ProjectDependencyCountOrderByAggregateInputSchema";
import { ProjectDependencyMaxOrderByAggregateInputSchema } from "./ProjectDependencyMaxOrderByAggregateInputSchema";
import { ProjectDependencyMinOrderByAggregateInputSchema } from "./ProjectDependencyMinOrderByAggregateInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectDependencyOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectDependencyOrderByWithAggregationInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjectDependencyCountOrderByAggregateInputSchema)
      .optional(),
    _max: z
      .lazy(() => ProjectDependencyMaxOrderByAggregateInputSchema)
      .optional(),
    _min: z
      .lazy(() => ProjectDependencyMinOrderByAggregateInputSchema)
      .optional(),
  });

export default ProjectDependencyOrderByWithAggregationInputSchema;
