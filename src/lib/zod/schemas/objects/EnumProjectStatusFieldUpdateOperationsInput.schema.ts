import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectStatusSchema } from '../enums/ProjectStatus.schema'

const makeSchema = () => z.object({
  set: ProjectStatusSchema.optional()
}).strict();
export const EnumProjectStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumProjectStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumProjectStatusFieldUpdateOperationsInput>;
export const EnumProjectStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
