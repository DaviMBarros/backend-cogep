import { Router } from "express";
import { loginCreate } from "../controllers/login.controllers";

export const loginRoutes: Router = Router()

loginRoutes.post("/", loginCreate)
