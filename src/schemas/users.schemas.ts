import {z} from "zod";

export const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    phone: z.string().max(15),
    email: z.string().email().max(45),
    adress: z.string().max(200),
    password: z.string().max(120),
    admin: z.boolean().default(false),
});

export const usersCreateSchema = usersSchema.omit({ id: true });
export const usersReturnSchema = usersSchema.omit({ password: true });
export const usersReadSchema = usersReturnSchema.array();
export const usersUpdateOmitSchema = usersCreateSchema.omit({ admin: true })
export const usersUpdateSchema = usersUpdateOmitSchema.partial()