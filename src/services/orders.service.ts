// import IOrder from '../interfaces/order.interface';
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

  create = async (/* order: IOrder */) => {
    // const result = await this.ordersModel.create(order);
    // return result;
  };
}

export default OrdersService;