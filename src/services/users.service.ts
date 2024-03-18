import User from "../entities/users.entity";
import { UsersCreate, UsersRead, UsersReturn, UsersUpdate } from "../interfaces/users.interfaces";
import { userRepository } from "../repositories";
import { usersReadSchema, usersReturnSchema } from "../schemas/users.schemas";

export const createUser = async (payload: UsersCreate): Promise<UsersReturn> => {
    const user: User = userRepository.create(payload)
    await userRepository.save(user)

    return usersReturnSchema.parse(user)
};

export const readUser = async (userId: number): Promise<UsersReturn> => {
    const user = await userRepository.findOne({where: {id: userId}, relations: {
        activities: true
    }})

    return usersReturnSchema.parse(user)
};

export const updateUserById = async (user: User, payload: UsersUpdate): Promise<UsersReturn> => {
    const userUpdate = await userRepository.save({ ...user, ...payload })

    return usersReturnSchema.parse(userUpdate)
};

export const deleteUserById = async (user: User): Promise<any> => {
    await userRepository.remove(user)
};
