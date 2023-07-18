import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const idNumberBiggerThan10 = z.number().min(10);

export const idValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = idNumberBiggerThan10.parse(req.params.id);
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid ID' });
    }
};

export const nameValidator = (req: Request, res: Response, next: NextFunction) => {

};