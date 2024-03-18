import { Request, Response } from "express";
import { ActivitiesReturn } from "../interfaces/activities.interfaces";
import { createActivity, deleteActivityById, readActivities } from "../services/activities.service";
import Activity from "../entities/activities.entity";
import { activityRepository } from "../repositories";
import AppError from "../errors/App.error";

export const createActivityController = async (req: Request, res: Response): Promise<Response> => {
    const activity: ActivitiesReturn = await createActivity(req.body)

    return res.status(201).json(activity)
}

export const readActivityController = async (req: Request, res: Response): Promise<Response> => {
    const activities = await readActivities()

    return res.status(200).json(activities)
} 

export const deleteActivityController = async (req: Request, res: Response): Promise<Response> => {
    const activity: Activity | null = await activityRepository.findOne({ 
        where: { 
            id: Number(req.params.id) 
        }})
    if(!activity) {
        throw new AppError("Activity not found", 404)
    }

    await deleteActivityById(activity)
    return res.status(204).json()
}