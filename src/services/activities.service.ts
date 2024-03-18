import Activity from "../entities/activities.entity";
import { ActivitiesCreate, ActivitiesReturn, ActivitiesUpate } from "../interfaces/activities.interfaces";
import { activityRepository } from "../repositories";
import { activitiesReadSchema, activitiesSchema } from "../schemas/activities.schemas";

export const createActivity = async (payload: ActivitiesCreate): Promise<ActivitiesReturn> => {
    const activity: Activity = activityRepository.create(payload)
    await activityRepository.save(activity)

    return activitiesSchema.parse(activity)
};

export const readActivities = async (): Promise<ActivitiesReturn[]> => {
    const activity: Activity[] = await activityRepository.find()

    return activitiesReadSchema.parse(activity)
};

export const deleteActivityById = async (activity: Activity): Promise<any> => {
    await activityRepository.remove(activity)
};
