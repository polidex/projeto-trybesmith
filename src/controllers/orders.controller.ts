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

  create = async (req: Request, res: Response) => {
    const result = 'post no /orders';
    // const order = req.body;
    // const { userId } = req.headers;

    // await this.ordersService.create({ ...order, userId });
    return res.status(201).json(/* { userId, ...order } */result);
  };
}

export default OrdersController;