import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyCreateManyDependencyInputObjectSchema as ProjectDependencyCreateManyDependencyInputObjectSchema } from './ProjectDependencyCreateManyDependencyInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectDependencyCreateManyDependencyInputObjectSchema), z.lazy(() => ProjectDependencyCreateManyDependencyInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectDependencyCreateManyDependencyInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyDependencyInputEnvelope>;
export const ProjectDependencyCreateManyDependencyInputEnvelopeObjectZodSchema = makeSchema();
