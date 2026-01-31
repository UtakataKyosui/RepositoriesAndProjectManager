import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RepositoryCreateManyProjectInputObjectSchema as RepositoryCreateManyProjectInputObjectSchema } from './RepositoryCreateManyProjectInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RepositoryCreateManyProjectInputObjectSchema), z.lazy(() => RepositoryCreateManyProjectInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RepositoryCreateManyProjectInputEnvelopeObjectSchema: z.ZodType<Prisma.RepositoryCreateManyProjectInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryCreateManyProjectInputEnvelope>;
export const RepositoryCreateManyProjectInputEnvelopeObjectZodSchema = makeSchema();
