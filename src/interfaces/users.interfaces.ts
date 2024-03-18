import { z } from "zod";
import { usersCreateSchema, usersReadSchema, usersReturnSchema, usersUpdateOmitSchema } from "../schemas/users.schemas";
import User from "../entities/users.entity";
import { DeepPartial, Repository } from "typeorm";

export type UsersCreate = z.infer<typeof usersCreateSchema>;
export type UsersRead = z.infer<typeof usersReadSchema>;
export type UsersUpdateOmit = z.infer<typeof usersUpdateOmitSchema>
export type UsersUpdate = DeepPartial<UsersUpdateOmit>
export type UserRepository = Repository<User>
export type UsersReturn = z.infer<typeof usersReturnSchema>