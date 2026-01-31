import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryWhereInputObjectSchema as RepositoryWhereInputObjectSchema } from './RepositoryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RepositoryWhereInputObjectSchema).optional()
}).strict();
export const ProjectCountOutputTypeCountRepositoriesArgsObjectSchema = makeSchema();
export const ProjectCountOutputTypeCountRepositoriesArgsObjectZodSchema = makeSchema();
