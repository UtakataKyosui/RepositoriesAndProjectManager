import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutDependentsInputObjectSchema as ProjectCreateWithoutDependentsInputObjectSchema } from './ProjectCreateWithoutDependentsInput.schema';
import { ProjectUncheckedCreateWithoutDependentsInputObjectSchema as ProjectUncheckedCreateWithoutDependentsInputObjectSchema } from './ProjectUncheckedCreateWithoutDependentsInput.schema';
import { ProjectCreateOrConnectWithoutDependentsInputObjectSchema as ProjectCreateOrConnectWithoutDependentsInputObjectSchema } from './ProjectCreateOrConnectWithoutDependentsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDependentsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutDependentsInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutDependentsInput>;
export const ProjectCreateNestedOneWithoutDependentsInputObjectZodSchema = makeSchema();
