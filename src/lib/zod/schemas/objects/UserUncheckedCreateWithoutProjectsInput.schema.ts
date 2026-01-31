import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { RoadmapUncheckedCreateNestedManyWithoutUserInputObjectSchema as RoadmapUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RoadmapUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roadmaps: z.lazy(() => RoadmapUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutProjectsInput>;
export const UserUncheckedCreateWithoutProjectsInputObjectZodSchema = makeSchema();
