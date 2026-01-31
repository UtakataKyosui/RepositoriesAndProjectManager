import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateManyProjectInputEnvelopeSchema } from "./RoadmapProjectCreateManyProjectInputEnvelopeSchema";
import { RoadmapProjectCreateOrConnectWithoutProjectInputSchema } from "./RoadmapProjectCreateOrConnectWithoutProjectInputSchema";
import { RoadmapProjectCreateWithoutProjectInputSchema } from "./RoadmapProjectCreateWithoutProjectInputSchema";
import { RoadmapProjectUncheckedCreateWithoutProjectInputSchema } from "./RoadmapProjectUncheckedCreateWithoutProjectInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.RoadmapProjectCreateNestedManyWithoutProjectInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutProjectInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutProjectInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyProjectInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapProjectCreateNestedManyWithoutProjectInputSchema;
