import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateManyDependentInputEnvelopeSchema } from "./ProjectDependencyCreateManyDependentInputEnvelopeSchema";
import { ProjectDependencyCreateOrConnectWithoutDependentInputSchema } from "./ProjectDependencyCreateOrConnectWithoutDependentInputSchema";
import { ProjectDependencyCreateWithoutDependentInputSchema } from "./ProjectDependencyCreateWithoutDependentInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependentInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependentInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateNestedManyWithoutDependentInput> =
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
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependentInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default ProjectDependencyUncheckedCreateNestedManyWithoutDependentInputSchema;
