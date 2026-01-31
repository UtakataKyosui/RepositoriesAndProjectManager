import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RoadmapProjectSelectObjectSchema as RoadmapProjectSelectObjectSchema } from './objects/RoadmapProjectSelect.schema';
import { RoadmapProjectIncludeObjectSchema as RoadmapProjectIncludeObjectSchema } from './objects/RoadmapProjectInclude.schema';
import { RoadmapProjectCreateInputObjectSchema as RoadmapProjectCreateInputObjectSchema } from './objects/RoadmapProjectCreateInput.schema';
import { RoadmapProjectUncheckedCreateInputObjectSchema as RoadmapProjectUncheckedCreateInputObjectSchema } from './objects/RoadmapProjectUncheckedCreateInput.schema';

export const RoadmapProjectCreateOneSchema: z.ZodType<Prisma.RoadmapProjectCreateArgs> = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), data: z.union([RoadmapProjectCreateInputObjectSchema, RoadmapProjectUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RoadmapProjectCreateArgs>;

export const RoadmapProjectCreateOneZodSchema = z.object({ select: RoadmapProjectSelectObjectSchema.optional(), include: RoadmapProjectIncludeObjectSchema.optional(), data: z.union([RoadmapProjectCreateInputObjectSchema, RoadmapProjectUncheckedCreateInputObjectSchema]) }).strict();