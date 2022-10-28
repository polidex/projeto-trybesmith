import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  read = async () => {
    const query = `SELECT od.id, od.userId, json_arrayagg(pr.id) AS productsIds
    FROM Trybesmith.Orders AS od 
    INNER JOIN Trybesmith.Products AS pr ON pr.orderId = od.id 
    GROUP BY od.id`;
    const result = await this.connection.execute<ResultSetHeader>(query);
    return result[0];
  };

  create = async (order: IOrder, userId: number) => {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [userId]);
      
    order.productsIds.forEach(async (id: number) => {
      const [result] = await this.connection.execute(query2, [insertId, id]);
      return result;
    });
  };
}

export default OrdersModel;