import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  read = async () => {
    const result = await this.ordersModel.read();
    return result;
  };
}

export default OrdersService;