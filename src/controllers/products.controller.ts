import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const result = await this.productsService.create(req.body);
    return res.status(201).json({ id: result.insertId, name, amount });
  };

  read = async (_req: Request, res: Response) => {
    const result = await this.productsService.read();
    return res.status(200).json(result);
  };
}

export default ProductsController;