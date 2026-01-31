import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { BoolFilterSchema } from "./BoolFilterSchema";
import { IntFilterSchema } from "./IntFilterSchema";
import { RoadmapGoalWhereInputSchema } from "./RoadmapGoalWhereInputSchema";
import { RoadmapScalarRelationFilterSchema } from "./RoadmapScalarRelationFilterSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const RoadmapGoalWhereUniqueInputSchema: z.ZodType<Prisma.RoadmapGoalWhereUniqueInput> =
  z
    .object({
      id: z.cuid(),
    })
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        AND: z
          .union([
            z.lazy(() => RoadmapGoalWhereInputSchema),
            z.lazy(() => RoadmapGoalWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => RoadmapGoalWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => RoadmapGoalWhereInputSchema),
            z.lazy(() => RoadmapGoalWhereInputSchema).array(),
          ])
          .optional(),
        content: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        order: z
          .union([z.lazy(() => IntFilterSchema), z.number().int()])
          .optional(),
        isCompleted: z
          .union([z.lazy(() => BoolFilterSchema), z.boolean()])
          .optional(),
        roadmapId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        roadmap: z
          .union([
            z.lazy(() => RoadmapScalarRelationFilterSchema),
            z.lazy(() => RoadmapWhereInputSchema),
          ])
          .optional(),
      }),
    );

export default RoadmapGoalWhereUniqueInputSchema;
