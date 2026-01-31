import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutAccountsInputSchema } from "./UserCreateWithoutAccountsInputSchema";
import { UserUncheckedCreateWithoutAccountsInputSchema } from "./UserUncheckedCreateWithoutAccountsInputSchema";
import { UserUncheckedUpdateWithoutAccountsInputSchema } from "./UserUncheckedUpdateWithoutAccountsInputSchema";
import { UserUpdateWithoutAccountsInputSchema } from "./UserUpdateWithoutAccountsInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAccountsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export default UserUpsertWithoutAccountsInputSchema;
