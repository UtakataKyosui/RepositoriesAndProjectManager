import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryCreateInputSchema } from "../inputTypeSchemas/RepositoryCreateInputSchema";
import { RepositoryIncludeSchema } from "../inputTypeSchemas/RepositoryIncludeSchema";
import { RepositoryUncheckedCreateInputSchema } from "../inputTypeSchemas/RepositoryUncheckedCreateInputSchema";
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

export const RepositoryUpsertArgsSchema: z.ZodType<Prisma.RepositoryUpsertArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: z.lazy(() => RepositoryIncludeSchema).optional(),
      where: RepositoryWhereUniqueInputSchema,
      create: z.union([
        RepositoryCreateInputSchema,
        RepositoryUncheckedCreateInputSchema,
      ]),
      update: z.union([
        RepositoryUpdateInputSchema,
        RepositoryUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export default RepositoryUpsertArgsSchema;
