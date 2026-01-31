import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionCreateWithoutUserInputSchema } from "./SessionCreateWithoutUserInputSchema";
import { SessionUncheckedCreateWithoutUserInputSchema } from "./SessionUncheckedCreateWithoutUserInputSchema";
import { SessionWhereUniqueInputSchema } from "./SessionWhereUniqueInputSchema";

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => SessionWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default SessionCreateOrConnectWithoutUserInputSchema;
