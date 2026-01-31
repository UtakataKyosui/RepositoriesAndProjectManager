import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SessionUncheckedUpdateWithoutUserInputSchema } from "./SessionUncheckedUpdateWithoutUserInputSchema";
import { SessionUpdateWithoutUserInputSchema } from "./SessionUpdateWithoutUserInputSchema";
import { SessionWhereUniqueInputSchema } from "./SessionWhereUniqueInputSchema";

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => SessionWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
    ]),
  });

export default SessionUpdateWithWhereUniqueWithoutUserInputSchema;
