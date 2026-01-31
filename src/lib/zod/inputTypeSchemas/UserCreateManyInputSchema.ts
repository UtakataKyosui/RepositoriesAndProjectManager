import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export default UserCreateManyInputSchema;
