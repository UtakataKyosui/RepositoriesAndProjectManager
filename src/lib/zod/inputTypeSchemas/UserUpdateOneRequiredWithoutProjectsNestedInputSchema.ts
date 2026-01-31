import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutProjectsInputSchema } from "./UserCreateOrConnectWithoutProjectsInputSchema";
import { UserCreateWithoutProjectsInputSchema } from "./UserCreateWithoutProjectsInputSchema";
import { UserUncheckedCreateWithoutProjectsInputSchema } from "./UserUncheckedCreateWithoutProjectsInputSchema";
import { UserUncheckedUpdateWithoutProjectsInputSchema } from "./UserUncheckedUpdateWithoutProjectsInputSchema";
import { UserUpdateToOneWithWhereWithoutProjectsInputSchema } from "./UserUpdateToOneWithWhereWithoutProjectsInputSchema";
import { UserUpdateWithoutProjectsInputSchema } from "./UserUpdateWithoutProjectsInputSchema";
import { UserUpsertWithoutProjectsInputSchema } from "./UserUpsertWithoutProjectsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProjectsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProjectsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutProjectsInputSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutProjectsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateToOneWithWhereWithoutProjectsInputSchema),
        z.lazy(() => UserUpdateWithoutProjectsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutProjectsInputSchema),
      ])
      .optional(),
  });

export default UserUpdateOneRequiredWithoutProjectsNestedInputSchema;
