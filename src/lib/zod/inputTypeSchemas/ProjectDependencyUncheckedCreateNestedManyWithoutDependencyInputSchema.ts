import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyCreateManyDependencyInputEnvelopeSchema } from "./ProjectDependencyCreateManyDependencyInputEnvelopeSchema";
import { ProjectDependencyCreateOrConnectWithoutDependencyInputSchema } from "./ProjectDependencyCreateOrConnectWithoutDependencyInputSchema";
import { ProjectDependencyCreateWithoutDependencyInputSchema } from "./ProjectDependencyCreateWithoutDependencyInputSchema";
import { ProjectDependencyUncheckedCreateWithoutDependencyInputSchema } from "./ProjectDependencyUncheckedCreateWithoutDependencyInputSchema";
import { ProjectDependencyWhereUniqueInputSchema } from "./ProjectDependencyWhereUniqueInputSchema";

export const ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema: z.ZodType<Prisma.ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInput> =
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
    createMany: z
      .lazy(() => ProjectDependencyCreateManyDependencyInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema),
        z.lazy(() => ProjectDependencyWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default ProjectDependencyUncheckedCreateNestedManyWithoutDependencyInputSchema;
