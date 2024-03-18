import {z} from "zod";

export const activitiesSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    description: z.string().max(300),
    startDate: z.string(),
    endDate: z.string(),
    createdAt: z.string(),
});

export const activitiesCreateSchema = activitiesSchema.omit({ id: true, createdAt: true });
export const activitiesUpdateSchema = activitiesSchema.partial(); 
export const activitiesReadSchema = activitiesSchema.array();