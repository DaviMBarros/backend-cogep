import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { usersCreateSchema } from "../schemas/users.schemas";
import { createUserController, deleteUserUserController, readUserController, updateUserController } from "../controllers/users.controllers";
import { verifyId } from "../middlewares/verifyId.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyPermission } from "../middlewares/verifyPermission.middlewares";

export const userRouter: Router = Router()

userRouter.post("/", validateBody(usersCreateSchema), createUserController)

userRouter.use("/:id", verifyId)

userRouter.get("/:id", readUserController)
userRouter.patch("/:id", verifyToken, verifyPermission, updateUserController)
userRouter.delete("/:id", verifyToken, verifyPermission, deleteUserUserController)