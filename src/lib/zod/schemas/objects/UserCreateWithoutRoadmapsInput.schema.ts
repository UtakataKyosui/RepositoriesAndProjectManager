import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { ProjectCreateNestedManyWithoutUserInputObjectSchema as ProjectCreateNestedManyWithoutUserInputObjectSchema } from './ProjectCreateNestedManyWithoutUserInput.schema'

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
  projects: z.lazy(() => ProjectCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutRoadmapsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutRoadmapsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutRoadmapsInput>;
export const UserCreateWithoutRoadmapsInputObjectZodSchema = makeSchema();
