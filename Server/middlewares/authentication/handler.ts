import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { config } from '../../utils/config';
import UserManager from '../../user/user.manager';
import logger from '../../utils/logger';
import { log } from 'winston';
import { AuthorizationFailError } from '../errors/userError';
import { AuthenticatedRequest } from '../../utils/types';

export default class AuthHandler {
    static async login(req: Request, res: Response) {
        const user = {
            userName: req.body.userName,
            password: req.body.password
        }

        const isUserValidated = await UserManager.validateUserCredit(user.userName, user.password);
        if (!isUserValidated)
            throw new AuthorizationFailError();

        const accessToken = jwt.sign(user, config.secretKey, { expiresIn: config.tokenExpiration });
        logger.info(`Access token granted.`);

        await UserManager.grantAccessToken(user.userName, accessToken);
        res.json(accessToken);
    }

    static async authenticateToken(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token)
            return res.sendStatus(401);

        jwt.verify(token, config.secretKey, async (err, user) => {
            if (err)
                return res.sendStatus(401);
            const userAuth = await UserManager.getUserByToken(token);
            logger.info(`USER AUTH: ${JSON.stringify(userAuth, null, 2)}`);

            if (!userAuth)
                return res.sendStatus(403);
            (req as AuthenticatedRequest).user = userAuth;
            next();
        })
    }
}