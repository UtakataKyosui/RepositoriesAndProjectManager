import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutRoadmapsInputObjectSchema as UserCreateWithoutRoadmapsInputObjectSchema } from './UserCreateWithoutRoadmapsInput.schema';
import { UserUncheckedCreateWithoutRoadmapsInputObjectSchema as UserUncheckedCreateWithoutRoadmapsInputObjectSchema } from './UserUncheckedCreateWithoutRoadmapsInput.schema';
import { UserCreateOrConnectWithoutRoadmapsInputObjectSchema as UserCreateOrConnectWithoutRoadmapsInputObjectSchema } from './UserCreateOrConnectWithoutRoadmapsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoadmapsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRoadmapsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoadmapsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRoadmapsInput>;
export const UserCreateNestedOneWithoutRoadmapsInputObjectZodSchema = makeSchema();
