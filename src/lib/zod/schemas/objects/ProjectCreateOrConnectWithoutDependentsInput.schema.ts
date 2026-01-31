import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutDependentsInputObjectSchema as ProjectCreateWithoutDependentsInputObjectSchema } from './ProjectCreateWithoutDependentsInput.schema';
import { ProjectUncheckedCreateWithoutDependentsInputObjectSchema as ProjectUncheckedCreateWithoutDependentsInputObjectSchema } from './ProjectUncheckedCreateWithoutDependentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutDependentsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutDependentsInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutDependentsInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutDependentsInput>;
export const ProjectCreateOrConnectWithoutDependentsInputObjectZodSchema = makeSchema();
