import { create } from 'domain';
import { Request, Response } from 'express';
import { UnAuthorizedUserError, UsernameExistsError } from '../middlewares/errors/userError';
import logger from '../utils/logger';
import { IUser } from './user.interface';
import UserManager from './user.manager';
import userRepository from './user.repository';
import { AuthenticatedRequest } from '../utils/types';

export default class UserController {
    static async getUserById(req: AuthenticatedRequest, res: Response) {
        const userId = req.params.id;
        const user = await UserManager.getUserById(userId);
        res.status(200).json({ user });
        return;
    }

    static async addUser(req: Request, res: Response) {
        const createdUser = await UserManager.addUser(req.body as IUser)
        res.json(createdUser);
    }

    static async updateUser(req: AuthenticatedRequest, res: Response) {
        const userIdToUpdate = req.params.id;

        const updatedUser = await UserManager.updateUser(userIdToUpdate, req.body as IUser, req.user);
        res.json(updatedUser);
    }

    static async deleteUser(req: Request, res: Response) {
        const userIdToRemove = req.params.id;
        const updatedUser = await UserManager.deleteUser(userIdToRemove);
        res.json(updatedUser);
    }
}