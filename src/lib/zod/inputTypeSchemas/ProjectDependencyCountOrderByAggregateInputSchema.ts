import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectDependencyCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyCountOrderByAggregateInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
  });

export default ProjectDependencyCountOrderByAggregateInputSchema;
