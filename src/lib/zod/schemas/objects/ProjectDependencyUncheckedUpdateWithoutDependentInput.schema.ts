import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  dependencyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ProjectDependencyUncheckedUpdateWithoutDependentInputObjectSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependentInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectDependencyUncheckedUpdateWithoutDependentInput>;
export const ProjectDependencyUncheckedUpdateWithoutDependentInputObjectZodSchema = makeSchema();
