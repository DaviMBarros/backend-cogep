import { z } from "zod";
import { usersCreateSchema, usersReadSchema } from "../schemas/users.schemas";
import User from "../entities/users.entity";
import { DeepPartial, Repository } from "typeorm";

export type UsersCreate = z.infer<typeof usersCreateSchema>;
export type UsersRead = z.infer<typeof usersReadSchema>;
export type UsersUpate = DeepPartial<User>;
export type UserRepository = Repository<User>