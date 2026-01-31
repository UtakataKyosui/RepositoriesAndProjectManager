import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";

export const RepositoryIncludeSchema: z.ZodType<Prisma.RepositoryInclude> = z
  .object({
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
  })
  .strict();

export default RepositoryIncludeSchema;
