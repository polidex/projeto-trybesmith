import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import amountValidation from '../middleware/amountValidation';
import nameValidation from '../middleware/nameValidations';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', nameValidation, amountValidation, productsController.create);

productsRouter.get('/', productsController.read);

export default productsRouter;