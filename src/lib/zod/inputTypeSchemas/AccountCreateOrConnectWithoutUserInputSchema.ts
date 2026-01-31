import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { AccountCreateWithoutUserInputSchema } from "./AccountCreateWithoutUserInputSchema";
import { AccountUncheckedCreateWithoutUserInputSchema } from "./AccountUncheckedCreateWithoutUserInputSchema";
import { AccountWhereUniqueInputSchema } from "./AccountWhereUniqueInputSchema";

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> =
  z.strictObject({
    where: z.lazy(() => AccountWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutUserInputSchema),
      z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
    ]),
  });

export default AccountCreateOrConnectWithoutUserInputSchema;
