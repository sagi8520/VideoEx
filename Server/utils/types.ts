import { Request, Response, NextFunction } from "express";
import { IUser } from "../user/user.interface";

export type AuthenticatedRequest = {
    user: IUser
} & Request


export type AuthenticateController = (req: AuthenticatedRequest, res: Response, next: NextFunction) => void