import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectCreateNestedOneWithoutRepositoriesInputSchema } from "./ProjectCreateNestedOneWithoutRepositoriesInputSchema";

export const RepositoryCreateInputSchema: z.ZodType<Prisma.RepositoryCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    url: z.string(),
    name: z.string().optional().nullable(),
    project: z.lazy(() => ProjectCreateNestedOneWithoutRepositoriesInputSchema),
  });

export default RepositoryCreateInputSchema;
