import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectDependencyCreateManyDependentInputObjectSchema as ProjectDependencyCreateManyDependentInputObjectSchema } from './ProjectDependencyCreateManyDependentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProjectDependencyCreateManyDependentInputObjectSchema), z.lazy(() => ProjectDependencyCreateManyDependentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProjectDependencyCreateManyDependentInputEnvelopeObjectSchema: z.ZodType<Prisma.ProjectDependencyCreateManyDependentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyCreateManyDependentInputEnvelope>;
export const ProjectDependencyCreateManyDependentInputEnvelopeObjectZodSchema = makeSchema();
