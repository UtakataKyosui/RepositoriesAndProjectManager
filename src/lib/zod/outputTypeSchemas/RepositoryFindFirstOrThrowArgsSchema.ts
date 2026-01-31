import type { Prisma } from "@prisma/client";
import { z } from "zod";
import { RepositoryIncludeSchema } from "../inputTypeSchemas/RepositoryIncludeSchema";
import { RepositoryOrderByWithRelationInputSchema } from "../inputTypeSchemas/RepositoryOrderByWithRelationInputSchema";
import { RepositoryScalarFieldEnumSchema } from "../inputTypeSchemas/RepositoryScalarFieldEnumSchema";
import { RepositoryWhereInputSchema } from "../inputTypeSchemas/RepositoryWhereInputSchema";
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

export const RepositoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RepositoryFindFirstOrThrowArgs> =
  z
    .object({
      select: RepositorySelectSchema.optional(),
      include: z.lazy(() => RepositoryIncludeSchema).optional(),
      where: RepositoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          RepositoryOrderByWithRelationInputSchema.array(),
          RepositoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: RepositoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          RepositoryScalarFieldEnumSchema,
          RepositoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default RepositoryFindFirstOrThrowArgsSchema;
