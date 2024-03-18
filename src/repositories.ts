import { AppDataSource } from "./data-source";
import Activity from "./entities/activities.entity";
import User from "./entities/users.entity";
import { ActivityRepository } from "./interfaces/activities.interfaces";
import { UserRepository } from "./interfaces/users.interfaces";

export const userRepository: UserRepository = AppDataSource.getRepository(User)
export const activityRepository: ActivityRepository = AppDataSource.getRepository(Activity)