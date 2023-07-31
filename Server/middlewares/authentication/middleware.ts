import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../../utils/types';

export class AuthenticationMiddleware {
    static requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
        if (req.user) {
            return next();
        }

        return res.redirect('/auth/login');
    }
}
