import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectDependencyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectDependencyOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export default ProjectDependencyOrderByRelationAggregateInputSchema;
