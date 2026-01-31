import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { ProjectDependencyOrderByRelationAggregateInputSchema } from "./ProjectDependencyOrderByRelationAggregateInputSchema";
import { RepositoryOrderByRelationAggregateInputSchema } from "./RepositoryOrderByRelationAggregateInputSchema";
import { RoadmapProjectOrderByRelationAggregateInputSchema } from "./RoadmapProjectOrderByRelationAggregateInputSchema";
import { SortOrderInputSchema } from "./SortOrderInputSchema";
import { SortOrderSchema } from "./SortOrderSchema";
import { UserOrderByWithRelationInputSchema } from "./UserOrderByWithRelationInputSchema";

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    repositories: z
      .lazy(() => RepositoryOrderByRelationAggregateInputSchema)
      .optional(),
    dependencies: z
      .lazy(() => ProjectDependencyOrderByRelationAggregateInputSchema)
      .optional(),
    dependents: z
      .lazy(() => ProjectDependencyOrderByRelationAggregateInputSchema)
      .optional(),
    roadmapProjects: z
      .lazy(() => RoadmapProjectOrderByRelationAggregateInputSchema)
      .optional(),
  });

export default ProjectOrderByWithRelationInputSchema;
