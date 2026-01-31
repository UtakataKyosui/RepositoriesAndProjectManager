import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const RepositoryUncheckedUpdateManyWithoutProjectInputObjectSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateManyWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.RepositoryUncheckedUpdateManyWithoutProjectInput>;
export const RepositoryUncheckedUpdateManyWithoutProjectInputObjectZodSchema = makeSchema();
