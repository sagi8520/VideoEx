import express, { Request, Response } from 'express';
import userRouter from './userRouter';
import imageRouter from './imageRouter';

const router = express();

router.use('/user', userRouter);
router.use('/image', imageRouter);


export default router;