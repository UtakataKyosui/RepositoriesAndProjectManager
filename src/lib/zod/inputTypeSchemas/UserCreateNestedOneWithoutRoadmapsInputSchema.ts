import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutRoadmapsInputSchema } from "./UserCreateOrConnectWithoutRoadmapsInputSchema";
import { UserCreateWithoutRoadmapsInputSchema } from "./UserCreateWithoutRoadmapsInputSchema";
import { UserUncheckedCreateWithoutRoadmapsInputSchema } from "./UserUncheckedCreateWithoutRoadmapsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateNestedOneWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoadmapsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutRoadmapsInputSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  });

export default UserCreateNestedOneWithoutRoadmapsInputSchema;
