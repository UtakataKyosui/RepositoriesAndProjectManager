import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateOrConnectWithoutRoadmapsInputSchema } from "./UserCreateOrConnectWithoutRoadmapsInputSchema";
import { UserCreateWithoutRoadmapsInputSchema } from "./UserCreateWithoutRoadmapsInputSchema";
import { UserUncheckedCreateWithoutRoadmapsInputSchema } from "./UserUncheckedCreateWithoutRoadmapsInputSchema";
import { UserUncheckedUpdateWithoutRoadmapsInputSchema } from "./UserUncheckedUpdateWithoutRoadmapsInputSchema";
import { UserUpdateToOneWithWhereWithoutRoadmapsInputSchema } from "./UserUpdateToOneWithWhereWithoutRoadmapsInputSchema";
import { UserUpdateWithoutRoadmapsInputSchema } from "./UserUpdateWithoutRoadmapsInputSchema";
import { UserUpsertWithoutRoadmapsInputSchema } from "./UserUpsertWithoutRoadmapsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoadmapsNestedInput> =
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
    upsert: z.lazy(() => UserUpsertWithoutRoadmapsInputSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateToOneWithWhereWithoutRoadmapsInputSchema),
        z.lazy(() => UserUpdateWithoutRoadmapsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputSchema),
      ])
      .optional(),
  });

export default UserUpdateOneRequiredWithoutRoadmapsNestedInputSchema;
