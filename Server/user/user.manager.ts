import { Request, Response } from 'express';
import logger from '../utils/logger';
import { EmailExistsError, UserNotExistsError, UsernameExistsError, UnAuthorizedUserError } from '../middlewares/errors/userError';
import { IUser } from './user.interface';
import userRepository from './user.repository';

export default class UserManager {
    static async validateUserCredit(userName: string, password: string) {
        const userValidated: boolean = await userRepository.validateUserCredit(userName, password);
        return userValidated;
    }
    static async isUserValidated(loggedInUserId: string, userIdRequsted: string) {
        return (loggedInUserId === userIdRequsted);
    }

    static async grantAccessToken(userName: string, accessToken: string) {
        logger.info(`updating access token in DB: userName: ${userName}`)
        return userRepository.updateUser({ userName }, { accessToken });
    }

    static async getUserByToken(accessToken: string) {
        logger.info(`getUserByToken`);
        return userRepository.getByToken(accessToken);
    }

    static async getUserById(userId: string) {
        const userExists: boolean = await userRepository.isUserExists(userId);
        if (!userExists)
            return undefined;
        return userRepository.getById(userId);
    }

    static async updateUser(userIdToUpdate: string, updatedUser: IUser, requestedUser?: IUser) {
        if (!requestedUser || !requestedUser._id)
            throw new UnAuthorizedUserError();
        const userValid = await UserManager.isUserValidated(requestedUser._id, userIdToUpdate);
        if (!userValid)
            throw new UnAuthorizedUserError();

        const currUser = await UserManager.getUserById(userIdToUpdate);
        if (!currUser)
            throw new UserNotExistsError();

        const userNameExists: boolean = await UserManager.isUsernameExists(updatedUser.userName);
        if (userNameExists && updatedUser.userName !== currUser.userName)
            throw new UsernameExistsError;

        const emailExists: boolean = await UserManager.isEmailExists(updatedUser.email);
        if (emailExists && updatedUser.email !== currUser.email)
            throw new EmailExistsError;

        return userRepository.updateUser({ _id: userIdToUpdate }, updatedUser);
    }

    static async addUser(userToAdd: IUser) {
        const userNameExists: boolean = await UserManager.isUsernameExists(userToAdd.userName);
        if (userNameExists)
            throw new UsernameExistsError;

        const emailExists: boolean = await UserManager.isEmailExists(userToAdd.email);
        if (emailExists)
            throw new EmailExistsError;
        return userRepository.addUser(userToAdd);
    }

    static async deleteUser(userIdToRemove: string) {
        const currUser = await UserManager.getUserById(userIdToRemove);
        if (!currUser)
            throw new UserNotExistsError();

        return userRepository.deleteUser(userIdToRemove);
    }

    private static async isEmailExists(email: string): Promise<boolean> {
        const exists = await userRepository.isEmailExists(email);
        return exists;
    }
    private static async isUsernameExists(userName: string): Promise<boolean> {
        const exists = await userRepository.isUsernameExists(userName);
        return exists;
    }
}
