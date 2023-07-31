import express, { Request, Response } from 'express';
import { Wrapper } from '../../utils/wrapper';
import AuthHandler from './handler';


const router = express();

router.post('/login', Wrapper.wrapAsync(AuthHandler.login));

export default router;