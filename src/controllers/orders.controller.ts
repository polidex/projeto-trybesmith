import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  read = async (_req: Request, res: Response) => {
    const result = await this.ordersService.read();
    return res.status(200).json(result);
  };
}

export default OrdersController;