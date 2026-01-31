import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryCreateManyProjectInputEnvelopeSchema } from "./RepositoryCreateManyProjectInputEnvelopeSchema";
import { RepositoryCreateOrConnectWithoutProjectInputSchema } from "./RepositoryCreateOrConnectWithoutProjectInputSchema";
import { RepositoryCreateWithoutProjectInputSchema } from "./RepositoryCreateWithoutProjectInputSchema";
import { RepositoryUncheckedCreateWithoutProjectInputSchema } from "./RepositoryUncheckedCreateWithoutProjectInputSchema";
import { RepositoryWhereUniqueInputSchema } from "./RepositoryWhereUniqueInputSchema";

export const RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RepositoryUncheckedCreateNestedManyWithoutProjectInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema),
        z.lazy(() => RepositoryCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RepositoryCreateManyProjectInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default RepositoryUncheckedCreateNestedManyWithoutProjectInputSchema;
