import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import { untokenize } from '../utilities/tokenize';

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
    const order = req.body;
    const token = req.headers.authorization as string;
    const user = untokenize(token);

    await this.ordersService.create(order, user.id);
    return res.status(201).json({ userId: user.id, productsIds: order.productsIds });
  };
}

export default OrdersController;