import express, { Request, Response } from 'express';
import customerRouter from './customerRouter';
import imageRouter from './imageRouter';

const router = express();

router.use('/customer', customerRouter);
router.use('/image', imageRouter);


export default router;