import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyWhereInputSchema } from "./ProjectDependencyWhereInputSchema";

export const ProjectDependencyListRelationFilterSchema: z.ZodType<Prisma.ProjectDependencyListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => ProjectDependencyWhereInputSchema).optional(),
    some: z.lazy(() => ProjectDependencyWhereInputSchema).optional(),
    none: z.lazy(() => ProjectDependencyWhereInputSchema).optional(),
  });

export default ProjectDependencyListRelationFilterSchema;
