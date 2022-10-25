import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.read);

export default ordersRouter;