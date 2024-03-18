import { sign } from "jsonwebtoken";
import { LoginCreate, LoginReturn } from "../interfaces/login.interface";
import { userRepository } from "../repositories";
import { compare } from "bcryptjs";
import User from "../entities/users.entity";
import AppError from "../errors/App.error";

export const createLogin = async ({ email, password }: LoginCreate): Promise<LoginReturn> => {
    const user: User | null = await userRepository.findOneBy({ email })

    if(!user) {
        throw new AppError("Invalid credentials", 401)
    }

    const samePassword: boolean =  await compare(password, user.password)
    
    if(!samePassword) {
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = sign(
        { admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    )
    return { token }
}