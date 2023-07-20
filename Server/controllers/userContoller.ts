import { Request, Response } from 'express';
import logger from '../utils/logger';

export const getUserById = (req: Request, res: Response) => {
    const userId = req.params.id;
    
    res.status(200).json({ userId });
    return;
}
