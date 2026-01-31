import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateManyDependentInputEnvelopeSchema } from "./ProjectDependencyCreateManyDependentInputEnvelopeSchema";
import { ProjectDependencyCreateOrConnectWithoutDependentInputSchema } from "./ProjectDependencyCreateOrConnectWithoutDependentInputSchema";
import { ProjectDependencyCreateWithoutDependentInputSchema } from "./ProjectDependencyCreateWithoutDependentInputSchema";
import { ProjectDependencyScalarWhereInputSchema } from "./ProjectDependencyScalarWhereInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependentInputSchema";
import { ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema } from "./ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema";
import { ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema } from "./ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema";
import { ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema } from "./ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUpdateManyWithoutDependentNestedInputSchema: z.ZodType<Prisma.ProjectDependencyUpdateManyWithoutDependentNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProjectDependencyCreateWithoutDependentInputSchema),
        z
          .lazy(() => ProjectDependencyCreateWithoutDependentInputSchema)
          .array(),
        z.lazy(
          () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyUncheckedCreateWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(
          () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () => ProjectDependencyCreateOrConnectWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () =>
            ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpsertWithWhereUniqueWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeSchema)
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
            ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateWithWhereUniqueWithoutDependentInputSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema,
        ),
        z
          .lazy(
            () =>
              ProjectDependencyUpdateManyWithWhereWithoutDependentInputSchema,
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

export default ProjectDependencyUpdateManyWithoutDependentNestedInputSchema;
