import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { UserCreateWithoutRoadmapsInputSchema } from "./UserCreateWithoutRoadmapsInputSchema";
import { UserUncheckedCreateWithoutRoadmapsInputSchema } from "./UserUncheckedCreateWithoutRoadmapsInputSchema";
import { UserWhereUniqueInputSchema } from "./UserWhereUniqueInputSchema";

export const UserCreateOrConnectWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoadmapsInput> =
  z.strictObject({
    where: z.lazy(() => UserWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoadmapsInputSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoadmapsInputSchema),
    ]),
  });

export default UserCreateOrConnectWithoutRoadmapsInputSchema;
