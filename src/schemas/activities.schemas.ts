import {z} from "zod";

export const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    description: z.string().max(300),
    startDate: z.string(),
    endDate: z.string(),
    createdAt: z.string(),
});

export const activitiesCreateSchema = usersSchema.omit({ id: true, createdAt: true });
export const activitiesUpdateSchema = usersSchema.partial(); 
export const activitiesReadSchema = usersSchema.array();