import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutRepositoriesInputObjectSchema as ProjectCreateWithoutRepositoriesInputObjectSchema } from './ProjectCreateWithoutRepositoriesInput.schema';
import { ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema as ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedCreateWithoutRepositoriesInput.schema';
import { ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema as ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema } from './ProjectCreateOrConnectWithoutRepositoriesInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutRepositoriesInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRepositoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutRepositoriesInput>;
export const ProjectCreateNestedOneWithoutRepositoriesInputObjectZodSchema = makeSchema();
