import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (product: IProduct) => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name,
      amount]);
    return result[0];
  };

  read = async () => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const result = await this.connection.execute<ResultSetHeader>(query);
    return result[0];
  };
}

export default ProductsModel;