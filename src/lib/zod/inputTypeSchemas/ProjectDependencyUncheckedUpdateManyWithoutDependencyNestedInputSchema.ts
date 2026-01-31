import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateManyDependencyInputEnvelopeSchema } from "./ProjectDependencyCreateManyDependencyInputEnvelopeSchema";
import { ProjectDependencyCreateOrConnectWithoutDependencyInputSchema } from "./ProjectDependencyCreateOrConnectWithoutDependencyInputSchema";
import { ProjectDependencyCreateWithoutDependencyInputSchema } from "./ProjectDependencyCreateWithoutDependencyInputSchema";
import { ProjectDependencyScalarWhereInputSchema } from "./ProjectDependencyScalarWhereInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependencyInputSchema";
import { ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema } from "./ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema";
import { ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema } from "./ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema";
import { ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema } from "./ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependencyInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpsertWithWhereUniqueWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateWithWhereUniqueWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateManyWithWhereWithoutDependencyInputSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjectDependencyScalarWhereInputSchema),
        z.lazy(() => ProjectDependencyScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export default ProjectDependencyUncheckedUpdateManyWithoutDependencyNestedInputSchema;
