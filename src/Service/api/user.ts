import { client } from "Service/axios";
import { IUser } from "Shared/Types";

const USER_URL = 'user/';

class User {
  getUserList() {
    return client.get<IUser[]>(USER_URL);
  }
}

export default User;