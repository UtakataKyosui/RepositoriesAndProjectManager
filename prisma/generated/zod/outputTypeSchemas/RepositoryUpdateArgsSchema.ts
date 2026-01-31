import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryIncludeSchema } from "../inputTypeSchemas/RepositoryIncludeSchema";
import { RepositoryUncheckedUpdateInputSchema } from "../inputTypeSchemas/RepositoryUncheckedUpdateInputSchema";
import { RepositoryUpdateInputSchema } from "../inputTypeSchemas/RepositoryUpdateInputSchema";
import { RepositoryWhereUniqueInputSchema } from "../inputTypeSchemas/RepositoryWhereUniqueInputSchema";
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RepositorySelectSchema: z.ZodType<Prisma.RepositorySelect> = z
  .object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    projectId: z.boolean().optional(),
    project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
  })
  .strict();

export const RepositoryUpdateArgsSchema: z.ZodType<Prisma.RepositoryUpdateArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: z.lazy(() => RepositoryIncludeSchema).optional(),
      data: z.union([
        RepositoryUpdateInputSchema,
        RepositoryUncheckedUpdateInputSchema,
      ]),
      where: RepositoryWhereUniqueInputSchema,
    })
    .strict();

export default RepositoryUpdateArgsSchema;
