import {z} from "zod";

export const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    phone: z.string().max(15),
    email: z.string().email().max(15),
    adress: z.string().max(200),
    password: z.string().max(120),
});

export const usersCreateSchema = usersSchema.omit({ id: true });
export const usersReturnSchema = usersSchema.omit({ password: true });
export const usersUpdateSchema = usersSchema.partial();
export const usersReadSchema = usersReturnSchema.array();