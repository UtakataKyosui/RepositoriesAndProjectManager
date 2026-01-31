import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutProjectsInputSchema } from "./UserCreateWithoutProjectsInputSchema";
import { UserUncheckedCreateWithoutProjectsInputSchema } from "./UserUncheckedCreateWithoutProjectsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProjectsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProjectsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutProjectsInputSchema),
    ]),
  });

export default UserCreateOrConnectWithoutProjectsInputSchema;
