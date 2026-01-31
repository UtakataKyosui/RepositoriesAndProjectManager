import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRoadmapsInputObjectSchema as UserUpdateWithoutRoadmapsInputObjectSchema } from './UserUpdateWithoutRoadmapsInput.schema';
import { UserUncheckedUpdateWithoutRoadmapsInputObjectSchema as UserUncheckedUpdateWithoutRoadmapsInputObjectSchema } from './UserUncheckedUpdateWithoutRoadmapsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRoadmapsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRoadmapsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoadmapsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoadmapsInput>;
export const UserUpdateToOneWithWhereWithoutRoadmapsInputObjectZodSchema = makeSchema();
