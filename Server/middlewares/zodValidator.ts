import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const idNumberBiggerThan10 = z.number().min(10);

export const idValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        idNumberBiggerThan10.parse(id);
        next();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const nameValidator = (req: Request, res: Response, next: NextFunction) => {

};