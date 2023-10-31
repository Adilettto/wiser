import { client } from "Service/axios";
// import { baseURL } from "Service/config";
import { ISignIn, ISignInResponse } from "Shared/Types/auth";

const USER_URL = "token/";

class Auth {
  signIn(data: ISignIn) {
    return client.post<ISignInResponse>(`${USER_URL}`, data);
  }
  refresh() {
    return client.post<any>(`${USER_URL}refresh/`);
  }
}

export default Auth;
