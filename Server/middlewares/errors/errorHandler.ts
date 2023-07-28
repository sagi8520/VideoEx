import express, { NextFunction, Request, Response } from 'express';
import logger from '../../utils/logger';
import { UserError } from './userError';

export const userErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof UserError) {
        console.log("error caught");

        res.status(error.status).send({
            type: error.name,
            message: error.message,
        });
        next();
    }
    else {
        next(error);
    }
}
export const applicationErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof UserError) {
        res.status(error.status).send({
            type: error.name,
            message: error.message,
        });
        next();
    }
    else {
        next(error);
    }
}
