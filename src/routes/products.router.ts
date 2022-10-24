import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', productsController.create);

productsRouter.get('/', productsController.read);

export default productsRouter;