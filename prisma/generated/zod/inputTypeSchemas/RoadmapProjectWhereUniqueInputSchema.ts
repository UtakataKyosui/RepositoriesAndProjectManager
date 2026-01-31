import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFilterSchema } from "./IntFilterSchema";
import { ProjectScalarRelationFilterSchema } from "./ProjectScalarRelationFilterSchema";
import { ProjectWhereInputSchema } from "./ProjectWhereInputSchema";
import { RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema } from "./RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema";
import { RoadmapProjectWhereInputSchema } from "./RoadmapProjectWhereInputSchema";
import { RoadmapScalarRelationFilterSchema } from "./RoadmapScalarRelationFilterSchema";
import { RoadmapWhereInputSchema } from "./RoadmapWhereInputSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const RoadmapProjectWhereUniqueInputSchema: z.ZodType<Prisma.RoadmapProjectWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.cuid(),
        roadmapId_projectId: z.lazy(
          () => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.cuid(),
      }),
      z.object({
        roadmapId_projectId: z.lazy(
          () => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema,
        ),
      }),
    ])
    .and(
      z.strictObject({
        id: z.cuid().optional(),
        roadmapId_projectId: z
          .lazy(() => RoadmapProjectRoadmapIdProjectIdCompoundUniqueInputSchema)
          .optional(),
        AND: z
          .union([
            z.lazy(() => RoadmapProjectWhereInputSchema),
            z.lazy(() => RoadmapProjectWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => RoadmapProjectWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => RoadmapProjectWhereInputSchema),
            z.lazy(() => RoadmapProjectWhereInputSchema).array(),
          ])
          .optional(),
        order: z
          .union([z.lazy(() => IntFilterSchema), z.number().int()])
          .optional(),
        roadmapId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        projectId: z
          .union([z.lazy(() => StringFilterSchema), z.string()])
          .optional(),
        roadmap: z
          .union([
            z.lazy(() => RoadmapScalarRelationFilterSchema),
            z.lazy(() => RoadmapWhereInputSchema),
          ])
          .optional(),
        project: z
          .union([
            z.lazy(() => ProjectScalarRelationFilterSchema),
            z.lazy(() => ProjectWhereInputSchema),
          ])
          .optional(),
      }),
    );

export default RoadmapProjectWhereUniqueInputSchema;
