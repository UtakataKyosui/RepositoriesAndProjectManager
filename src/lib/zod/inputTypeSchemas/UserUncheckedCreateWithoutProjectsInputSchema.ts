import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import { RoadmapUncheckedCreateNestedManyWithoutUserInputSchema } from "./RoadmapUncheckedCreateNestedManyWithoutUserInputSchema";
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutProjectsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProjectsInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export default UserUncheckedCreateWithoutProjectsInputSchema;
