import { usersSchema } from "./users.schemas";

export const loginSchema = usersSchema.pick({
    email: true,
    password: true
})
