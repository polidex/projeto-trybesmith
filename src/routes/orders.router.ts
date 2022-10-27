import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import orderValidations from '../middleware/orderValidations';
import tokenValidation from '../middleware/tokenValidation';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.read);

ordersRouter.post('/', tokenValidation, orderValidations, ordersController.create);

export default ordersRouter;