import express, { Request, Response } from 'express';
import { Wrapper } from '../utils/wrapper';
import userController from './user.contoller';


const router = express();

router.get('/:id', Wrapper.wrapAsync(userController.getUserById));
router.post('/', Wrapper.wrapAsync(userController.addUser));
router.patch('/:id', Wrapper.wrapAsync(userController.updateUser));
router.delete('/:id', Wrapper.wrapAsync(userController.deleteUser));

export default router;