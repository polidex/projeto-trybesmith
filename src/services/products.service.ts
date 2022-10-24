import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

class ProductsService {
  productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel(connection);
  }

  async create(product: IProduct) {
    const result = await this.productsModel.create(product);
    return result;
  }
}

export default ProductsService;