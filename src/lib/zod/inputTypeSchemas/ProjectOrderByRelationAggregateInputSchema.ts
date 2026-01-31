import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export default ProjectOrderByRelationAggregateInputSchema;
