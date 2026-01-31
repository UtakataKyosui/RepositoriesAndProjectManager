import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectOrderByWithRelationInputSchema } from "./ProjectOrderByWithRelationInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const RepositoryOrderByWithRelationInputSchema: z.ZodType<Prisma.RepositoryOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    projectId: z.lazy(() => SortOrderSchema).optional(),
    project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  });

export default RepositoryOrderByWithRelationInputSchema;
