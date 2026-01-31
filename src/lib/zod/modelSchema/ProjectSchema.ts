import { z } from "zod";

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  id: z.cuid(),
  title: z.string(),
  description: z.string().nullable(),
  published: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;

export default ProjectSchema;
