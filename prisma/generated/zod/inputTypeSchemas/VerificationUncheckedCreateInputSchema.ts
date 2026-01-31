import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const VerificationUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> =
  z.strictObject({
    id: z.cuid().optional(),
    identifier: z.string(),
    value: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  });

export default VerificationUncheckedCreateInputSchema;
