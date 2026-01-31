import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutProjectsInputSchema } from "./UserCreateWithoutProjectsInputSchema";
import { UserUncheckedCreateWithoutProjectsInputSchema } from "./UserUncheckedCreateWithoutProjectsInputSchema";
import { UserUncheckedUpdateWithoutProjectsInputSchema } from "./UserUncheckedUpdateWithoutProjectsInputSchema";
import { UserUpdateWithoutProjectsInputSchema } from "./UserUpdateWithoutProjectsInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.UserUpsertWithoutProjectsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProjectsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export default UserUpsertWithoutProjectsInputSchema;
