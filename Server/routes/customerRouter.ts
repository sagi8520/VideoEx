import express, { Request, Response } from 'express';
import * as CustomerController from '../controllers/customerContoller';
import * as validators from '../middlewares/zodValidator';

const router = express();

router.get('/:id', validators.idValidator, CustomerController.getCustomerById);
router.get('/:id/', CustomerController.getCustomerById);

export default router;