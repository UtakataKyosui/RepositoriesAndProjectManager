import { z } from "zod";

/////////////////////////////////////////
// REPOSITORY SCHEMA
/////////////////////////////////////////

export const RepositorySchema = z.object({
  id: z.cuid(),
  url: z.string(),
  name: z.string().nullable(),
  projectId: z.string(),
});

export type Repository = z.infer<typeof RepositorySchema>;

export default RepositorySchema;
