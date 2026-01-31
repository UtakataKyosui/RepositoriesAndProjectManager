import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProjectUpdateOneRequiredWithoutRepositoriesNestedInputObjectSchema as ProjectUpdateOneRequiredWithoutRepositoriesNestedInputObjectSchema } from './ProjectUpdateOneRequiredWithoutRepositoriesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutRepositoriesNestedInputObjectSchema).optional()
}).strict();
export const RepositoryUpdateInputObjectSchema: z.ZodType<Prisma.RepositoryUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUpdateInput>;
export const RepositoryUpdateInputObjectZodSchema = makeSchema();
