import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { createActivityController, deleteActivityController, readActivityController } from "../controllers/activities.controllers";
import { activitiesCreateSchema } from "../schemas/activities.schemas";

export const activityRouter: Router = Router()

activityRouter.post("/", validateBody(activitiesCreateSchema), createActivityController)
activityRouter.get("/", readActivityController)

activityRouter.delete("/:id", deleteActivityController)