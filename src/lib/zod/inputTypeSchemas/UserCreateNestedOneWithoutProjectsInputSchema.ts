import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutProjectsInputSchema } from "./UserCreateOrConnectWithoutProjectsInputSchema";
import { UserCreateWithoutProjectsInputSchema } from "./UserCreateWithoutProjectsInputSchema";
import { UserUncheckedCreateWithoutProjectsInputSchema } from "./UserUncheckedCreateWithoutProjectsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProjectsInput> =
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
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  });

export default UserCreateNestedOneWithoutProjectsInputSchema;
