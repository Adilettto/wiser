import { IOrder } from "Shared/Types/order";
import { client } from "Service/axios";

const ORDER_URL = "read_email/orders/";

class Order {
  getOrderList() {
    return client.get<IOrder[]>(ORDER_URL);
  }
  getOrder(id: number) {
    return client.get<IOrder>(`${ORDER_URL}${id}`);
  }
}

export default Order;
