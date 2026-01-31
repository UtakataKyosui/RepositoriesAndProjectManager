import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";

export const ProjectScalarRelationFilterSchema: z.ZodType<Prisma.ProjectScalarRelationFilter> =
  z.strictObject({
    is: z.lazy(() => ProjectWhereInputSchema).optional(),
    isNot: z.lazy(() => ProjectWhereInputSchema).optional(),
  });

export default ProjectScalarRelationFilterSchema;
