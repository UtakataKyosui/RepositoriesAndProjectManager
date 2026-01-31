import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dependentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependencyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependencyInput>;
export const ProjectDependencyUncheckedUpdateWithoutDependencyInputObjectZodSchema = makeSchema();
