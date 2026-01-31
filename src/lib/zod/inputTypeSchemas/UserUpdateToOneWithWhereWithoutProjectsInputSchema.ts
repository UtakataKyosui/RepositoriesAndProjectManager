import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserUncheckedUpdateWithoutProjectsInputSchema } from "./UserUncheckedUpdateWithoutProjectsInputSchema";
import { UserUpdateWithoutProjectsInputSchema } from "./UserUpdateWithoutProjectsInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpdateToOneWithWhereWithoutProjectsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => UserUpdateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProjectsInputSchema),
    ]),
  });

export default UserUpdateToOneWithWhereWithoutProjectsInputSchema;
