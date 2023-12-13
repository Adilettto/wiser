import Auth from "./auth";
import Order from "./order";
import User from "./user";

class ApiService {
  public user = new User();
  public auth = new Auth();
  public order = new Order();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiService();
