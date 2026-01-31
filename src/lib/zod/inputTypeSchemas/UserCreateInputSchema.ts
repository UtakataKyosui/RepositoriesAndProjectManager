import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputSchema } from "./AccountCreateNestedManyWithoutUserInputSchema";
import { ProjectCreateNestedManyWithoutUserInputSchema } from "./ProjectCreateNestedManyWithoutUserInputSchema";
import { RoadmapCreateNestedManyWithoutUserInputSchema } from "./RoadmapCreateNestedManyWithoutUserInputSchema";
import { SessionCreateNestedManyWithoutUserInputSchema } from "./SessionCreateNestedManyWithoutUserInputSchema";

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    name: z.string().optional().nullable(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
    projects: z
      .lazy(() => ProjectCreateNestedManyWithoutUserInputSchema)
      .optional(),
    roadmaps: z
      .lazy(() => RoadmapCreateNestedManyWithoutUserInputSchema)
      .optional(),
  });

export default UserCreateInputSchema;
