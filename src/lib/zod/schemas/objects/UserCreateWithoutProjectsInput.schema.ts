import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { RoadmapCreateNestedManyWithoutUserInputObjectSchema as RoadmapCreateNestedManyWithoutUserInputObjectSchema } from './RoadmapCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roadmaps: z.lazy(() => RoadmapCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutProjectsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutProjectsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutProjectsInput>;
export const UserCreateWithoutProjectsInputObjectZodSchema = makeSchema();
