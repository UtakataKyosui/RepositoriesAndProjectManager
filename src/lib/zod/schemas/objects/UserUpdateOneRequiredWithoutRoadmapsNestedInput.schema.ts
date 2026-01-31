import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutRoadmapsInputObjectSchema as UserCreateWithoutRoadmapsInputObjectSchema } from './UserCreateWithoutRoadmapsInput.schema';
import { UserUncheckedCreateWithoutRoadmapsInputObjectSchema as UserUncheckedCreateWithoutRoadmapsInputObjectSchema } from './UserUncheckedCreateWithoutRoadmapsInput.schema';
import { UserCreateOrConnectWithoutRoadmapsInputObjectSchema as UserCreateOrConnectWithoutRoadmapsInputObjectSchema } from './UserCreateOrConnectWithoutRoadmapsInput.schema';
import { UserUpsertWithoutRoadmapsInputObjectSchema as UserUpsertWithoutRoadmapsInputObjectSchema } from './UserUpsertWithoutRoadmapsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRoadmapsInputObjectSchema as UserUpdateToOneWithWhereWithoutRoadmapsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRoadmapsInput.schema';
import { UserUpdateWithoutRoadmapsInputObjectSchema as UserUpdateWithoutRoadmapsInputObjectSchema } from './UserUpdateWithoutRoadmapsInput.schema';
import { UserUncheckedUpdateWithoutRoadmapsInputObjectSchema as UserUncheckedUpdateWithoutRoadmapsInputObjectSchema } from './UserUncheckedUpdateWithoutRoadmapsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoadmapsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRoadmapsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUpdateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRoadmapsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoadmapsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoadmapsNestedInput>;
export const UserUpdateOneRequiredWithoutRoadmapsNestedInputObjectZodSchema = makeSchema();
