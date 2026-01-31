import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    userId: z.string(),
  });

export default SessionUncheckedCreateInputSchema;
