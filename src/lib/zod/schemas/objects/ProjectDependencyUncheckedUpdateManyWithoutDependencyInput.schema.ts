import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dependentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectDependencyUncheckedUpdateManyWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependencyInput>;
export const ProjectDependencyUncheckedUpdateManyWithoutDependencyInputObjectZodSchema = makeSchema();
