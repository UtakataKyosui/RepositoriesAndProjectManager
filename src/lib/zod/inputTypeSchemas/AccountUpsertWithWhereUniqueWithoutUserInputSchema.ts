import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateWithoutUserInputSchema } from "./AccountCreateWithoutUserInputSchema";
import { AccountUncheckedCreateWithoutUserInputSchema } from "./AccountUncheckedCreateWithoutUserInputSchema";
import { AccountUncheckedUpdateWithoutUserInputSchema } from "./AccountUncheckedUpdateWithoutUserInputSchema";
import { AccountUpdateWithoutUserInputSchema } from "./AccountUpdateWithoutUserInputSchema";
import { AccountWhereUniqueInputSchema } from "./AccountWhereUniqueInputSchema";

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => AccountWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default AccountUpsertWithWhereUniqueWithoutUserInputSchema;
