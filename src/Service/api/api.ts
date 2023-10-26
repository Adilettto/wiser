import Auth from "./auth";
import User from "./user";

class ApiService {
  public user = new User();
  public auth = new Auth();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiService();
