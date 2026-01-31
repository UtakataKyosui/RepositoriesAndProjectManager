import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { RoadmapProjectCreateManyRoadmapInputEnvelopeSchema } from "./RoadmapProjectCreateManyRoadmapInputEnvelopeSchema";
import { RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema } from "./RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema";
import { RoadmapProjectCreateWithoutRoadmapInputSchema } from "./RoadmapProjectCreateWithoutRoadmapInputSchema";
import { RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema } from "./RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema";
import { RoadmapProjectWhereUniqueInputSchema } from "./RoadmapProjectWhereUniqueInputSchema";

export const RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema: z.ZodType<Prisma.RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema),
        z.lazy(() => RoadmapProjectCreateWithoutRoadmapInputSchema).array(),
        z.lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectUncheckedCreateWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema),
        z
          .lazy(() => RoadmapProjectCreateOrConnectWithoutRoadmapInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => RoadmapProjectCreateManyRoadmapInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema),
        z.lazy(() => RoadmapProjectWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export default RoadmapProjectUncheckedCreateNestedManyWithoutRoadmapInputSchema;
