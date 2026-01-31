import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryCreateWithoutProjectInputSchema } from "./RepositoryCreateWithoutProjectInputSchema";
import { RepositoryUncheckedCreateWithoutProjectInputSchema } from "./RepositoryUncheckedCreateWithoutProjectInputSchema";
import { RepositoryUncheckedUpdateWithoutProjectInputSchema } from "./RepositoryUncheckedUpdateWithoutProjectInputSchema";
import { RepositoryUpdateWithoutProjectInputSchema } from "./RepositoryUpdateWithoutProjectInputSchema";
import { RepositoryWhereUniqueInputSchema } from "./RepositoryWhereUniqueInputSchema";

export const RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUpsertWithWhereUniqueWithoutProjectInput> =
  z.strictObject({
    where: z.lazy(() => RepositoryWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => RepositoryUpdateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedUpdateWithoutProjectInputSchema),
    ]),
    create: z.union([
      z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
      z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
    ]),
  });

export default RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema;
