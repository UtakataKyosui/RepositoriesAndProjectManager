import type { Prisma } from "@prisma/client";
import { z } from "zod";

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      sessions: z.boolean().optional(),
      accounts: z.boolean().optional(),
      projects: z.boolean().optional(),
      roadmaps: z.boolean().optional(),
    })
    .strict();

export default UserCountOutputTypeSelectSchema;
