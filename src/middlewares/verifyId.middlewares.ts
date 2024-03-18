import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";
import User from "../entities/users.entity";
import { userRepository } from "../repositories";


export const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user: User | null = await userRepository.findOne({ where: { id: Number(req.params.id) }})

    if(!user) {
        throw new AppError("User not found", 404)
    }

    res.locals = { ...res.locals, user}

    return next()
}