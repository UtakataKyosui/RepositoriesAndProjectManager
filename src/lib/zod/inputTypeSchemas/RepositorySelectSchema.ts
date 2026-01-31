import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";

export const RepositorySelectSchema: z.ZodType<Prisma.RepositorySelect> = z
  .object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
  })
  .strict();

export default RepositorySelectSchema;
