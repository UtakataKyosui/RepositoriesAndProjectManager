import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRoadmapsInputObjectSchema as UserCreateWithoutRoadmapsInputObjectSchema } from './UserCreateWithoutRoadmapsInput.schema';
import { UserUncheckedCreateWithoutRoadmapsInputObjectSchema as UserUncheckedCreateWithoutRoadmapsInputObjectSchema } from './UserUncheckedCreateWithoutRoadmapsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRoadmapsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoadmapsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRoadmapsInput>;
export const UserCreateOrConnectWithoutRoadmapsInputObjectZodSchema = makeSchema();
