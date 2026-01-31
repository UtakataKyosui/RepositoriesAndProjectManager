import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserUncheckedUpdateWithoutRoadmapsInputSchema } from "./UserUncheckedUpdateWithoutRoadmapsInputSchema";
import { UserUpdateWithoutRoadmapsInputSchema } from "./UserUpdateWithoutRoadmapsInputSchema";
import { UserWhereInputSchema } from "./UserWhereInputSchema";

export const UserUpdateToOneWithWhereWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoadmapsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => UserUpdateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoadmapsInputSchema),
    ]),
  });

export default UserUpdateToOneWithWhereWithoutRoadmapsInputSchema;
