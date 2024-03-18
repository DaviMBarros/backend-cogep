import { Request, Response } from "express";
import { UsersReturn } from "../interfaces/users.interfaces";
import { createUser, deleteUserById, readUser, updateUserById } from "../services/users.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: UsersReturn = await createUser(req.body)

    return res.status(201).json(user)
}

export const readUserController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)
    const users = await readUser(id)

    return res.status(200).json(res.locals.user)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals
    const { body } = req
    
    const users = await updateUserById(user, body)

    return res.status(200).json(users)
}

export const deleteUserUserController = async (req: Request, res: Response): Promise<Response> => {
    await deleteUserById(res.locals.user)

    return res.status(204).json()
}