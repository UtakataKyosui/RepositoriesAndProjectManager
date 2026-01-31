import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutRoadmapsInputObjectSchema as UserUpdateWithoutRoadmapsInputObjectSchema } from './UserUpdateWithoutRoadmapsInput.schema';
import { UserUncheckedUpdateWithoutRoadmapsInputObjectSchema as UserUncheckedUpdateWithoutRoadmapsInputObjectSchema } from './UserUncheckedUpdateWithoutRoadmapsInput.schema';
import { UserCreateWithoutRoadmapsInputObjectSchema as UserCreateWithoutRoadmapsInputObjectSchema } from './UserCreateWithoutRoadmapsInput.schema';
import { UserUncheckedCreateWithoutRoadmapsInputObjectSchema as UserUncheckedCreateWithoutRoadmapsInputObjectSchema } from './UserUncheckedCreateWithoutRoadmapsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRoadmapsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRoadmapsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRoadmapsInput>;
export const UserUpsertWithoutRoadmapsInputObjectZodSchema = makeSchema();
