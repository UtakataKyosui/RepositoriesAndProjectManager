import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectOrderByWithRelationInputSchema } from "./ProjectOrderByWithRelationInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";

export const ProjectDependencyOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectDependencyOrderByWithRelationInput> =
  z.strictObject({
    dependencyId: z.lazy(() => SortOrderSchema).optional(),
    dependentId: z.lazy(() => SortOrderSchema).optional(),
    dependency: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
    dependent: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
  });

export default ProjectDependencyOrderByWithRelationInputSchema;
