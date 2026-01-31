import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dependencyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dependentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectDependencyUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedUpdateInput>;
export const ProjectDependencyUncheckedUpdateInputObjectZodSchema = makeSchema();
