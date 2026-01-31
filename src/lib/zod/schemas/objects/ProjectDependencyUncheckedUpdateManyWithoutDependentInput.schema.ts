import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dependencyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectDependencyUncheckedUpdateManyWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependentInput>;
export const ProjectDependencyUncheckedUpdateManyWithoutDependentInputObjectZodSchema = makeSchema();
