import { Request, Response } from "express";
import { LoginReturn } from "../interfaces/login.interface";
import { createLogin } from "../services/login.service";


export const loginCreate = async (req: Request, res: Response): Promise<Response> => {
    const token: LoginReturn = await createLogin(req.body)

    return res.status(200).json(token)
}
