import express, { Request, Response } from 'express';
import userRouter from './user/user.router';
import imageRouter from './media/media.router';
import authRouter from './middlewares/authentication/router';

const router = express();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/image', imageRouter);

export default router;