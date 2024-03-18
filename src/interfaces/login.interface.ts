import { z } from "zod";
import { loginSchema } from "../schemas/login.schemas";


type LoginCreate = z.infer<typeof loginSchema>
type LoginReturn = { token: string }

export { LoginCreate, LoginReturn }