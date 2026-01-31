import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RepositoryCreateManyProjectInputEnvelopeSchema } from "./RepositoryCreateManyProjectInputEnvelopeSchema";
import { RepositoryCreateOrConnectWithoutProjectInputSchema } from "./RepositoryCreateOrConnectWithoutProjectInputSchema";
import { RepositoryCreateWithoutProjectInputSchema } from "./RepositoryCreateWithoutProjectInputSchema";
import { RepositoryScalarWhereInputSchema } from "./RepositoryScalarWhereInputSchema";
import { RepositoryUncheckedCreateWithoutProjectInputSchema } from "./RepositoryUncheckedCreateWithoutProjectInputSchema";
import { RepositoryUpdateManyWithWhereWithoutProjectInputSchema } from "./RepositoryUpdateManyWithWhereWithoutProjectInputSchema";
import { RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema } from "./RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema";
import { RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema } from "./RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema";
import { RepositoryWhereUniqueInputSchema } from "./RepositoryWhereUniqueInputSchema";

export const RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RepositoryUncheckedUpdateManyWithoutProjectNestedInput> =
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
    upsert: z
      .union([
        z.lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpsertWithWhereUniqueWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RepositoryCreateManyProjectInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => RepositoryWhereUniqueInputSchema),
        z.lazy(() => RepositoryWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpdateWithWhereUniqueWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputSchema),
        z
          .lazy(() => RepositoryUpdateManyWithWhereWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => RepositoryScalarWhereInputSchema),
        z.lazy(() => RepositoryScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export default RepositoryUncheckedUpdateManyWithoutProjectNestedInputSchema;
