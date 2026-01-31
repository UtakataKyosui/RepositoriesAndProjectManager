import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryIncludeSchema } from "../inputTypeSchemas/RepositoryIncludeSchema";
import { RepositorySelectSchema } from "../inputTypeSchemas/RepositorySelectSchema";

export const RepositoryArgsSchema: z.ZodType<Prisma.RepositoryDefaultArgs> = z
  .object({
    select: z.lazy(() => RepositorySelectSchema).optional(),
    include: z.lazy(() => RepositoryIncludeSchema).optional(),
  })
  .strict();

export default RepositoryArgsSchema;
