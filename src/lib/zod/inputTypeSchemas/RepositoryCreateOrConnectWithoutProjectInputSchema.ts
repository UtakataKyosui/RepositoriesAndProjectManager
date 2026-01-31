import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryCreateWithoutProjectInputSchema } from "./RepositoryCreateWithoutProjectInputSchema";
import { RepositoryUncheckedCreateWithoutProjectInputSchema } from "./RepositoryUncheckedCreateWithoutProjectInputSchema";
import { RepositoryWhereUniqueInputSchema } from "./RepositoryWhereUniqueInputSchema";

export const RepositoryCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryCreateOrConnectWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export default RepositoryCreateOrConnectWithoutProjectInputSchema;
