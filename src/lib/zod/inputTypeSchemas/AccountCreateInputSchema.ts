import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateNestedOneWithoutAccountsInputSchema } from "./UserCreateNestedOneWithoutAccountsInputSchema";

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
  });

export default AccountCreateInputSchema;
