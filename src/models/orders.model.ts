import { Pool, ResultSetHeader } from 'mysql2/promise';

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
}

export default OrdersModel;