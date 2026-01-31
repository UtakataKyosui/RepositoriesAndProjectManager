import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const ProjectCreateManyUserInputSchema: z.ZodType<Prisma.ProjectCreateManyUserInput> =
  z.strictObject({
    id: z.cuid().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  });

export default ProjectCreateManyUserInputSchema;
