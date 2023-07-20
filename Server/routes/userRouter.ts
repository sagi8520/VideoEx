import express, { Request, Response } from 'express';
import * as userController from '../controllers/userContoller';
import * as validators from '../middlewares/zodValidator';

const router = express();

router.get('/:id', validators.idValidator, userController.getUserById);

router.get('/:id', validators.idValidator, userController.getUserById);

export default router;