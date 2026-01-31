import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutRepositoriesInputObjectSchema as ProjectCreateWithoutRepositoriesInputObjectSchema } from './ProjectCreateWithoutRepositoriesInput.schema';
import { ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema as ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema } from './ProjectUncheckedCreateWithoutRepositoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutRepositoriesInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutRepositoriesInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutRepositoriesInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRepositoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutRepositoriesInput>;
export const ProjectCreateOrConnectWithoutRepositoriesInputObjectZodSchema = makeSchema();
