import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutRoadmapsInputSchema } from "./UserCreateWithoutRoadmapsInputSchema";
import { UserUncheckedCreateWithoutRoadmapsInputSchema } from "./UserUncheckedCreateWithoutRoadmapsInputSchema";
import { UserUncheckedUpdateWithoutRoadmapsInputSchema } from "./UserUncheckedUpdateWithoutRoadmapsInputSchema";
import { UserUpdateWithoutRoadmapsInputSchema } from "./UserUpdateWithoutRoadmapsInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpsertWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUpsertWithoutRoadmapsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => UserUpdateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
    ]),
    where: z.lazy(() => UserWhereInputSchema).optional(),
  });

export default UserUpsertWithoutRoadmapsInputSchema;
