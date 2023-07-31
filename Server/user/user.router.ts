import express, { Request, Response } from 'express';
import { Wrapper } from '../utils/wrapper';
import userController from './user.contoller';
import AuthHandler from '../middlewares/authentication/handler';


const router = express();

router.get('/:id', AuthHandler.authenticateToken, Wrapper.wrapAsync(userController.getUserById));
router.post('/', AuthHandler.authenticateToken, Wrapper.wrapAsync(userController.addUser));
router.patch('/:id', AuthHandler.authenticateToken, Wrapper.wrapAsync(userController.updateUser));
router.delete('/:id', AuthHandler.authenticateToken, Wrapper.wrapAsync(userController.deleteUser));

export default router;