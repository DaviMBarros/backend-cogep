import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Activity from "../entities/activities.entity";
import { activitiesCreateSchema, activitiesReadSchema } from "../schemas/activities.schemas";

export type ActivitiesCreate = z.infer<typeof activitiesCreateSchema>;
export type ActivitiesRead = z.infer<typeof activitiesReadSchema>;
export type ActivitiesUpate = DeepPartial<Activity>;
export type ActivityRepository = Repository<Activity>