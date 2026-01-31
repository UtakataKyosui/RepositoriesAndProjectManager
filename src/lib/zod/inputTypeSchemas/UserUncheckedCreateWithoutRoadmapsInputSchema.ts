import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInputSchema";
import { ProjectUncheckedCreateNestedManyWithoutUserInputSchema } from "./ProjectUncheckedCreateNestedManyWithoutUserInputSchema";
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInputSchema";

export const UserUncheckedCreateWithoutRoadmapsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRoadmapsInput> =
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
    projects: z
      .lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export default UserUncheckedCreateWithoutRoadmapsInputSchema;
