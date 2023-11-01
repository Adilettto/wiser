import { client } from "Service/axios";
import { baseURL } from "Service/config";
import {
  ISignIn,
  ISignInResponse,
  ISignUpResponse,
  ISignUp,
} from "Shared/Types/auth";

const USER_URL = "token/";

class Auth {
  signIn(data: ISignIn) {
    return client.post<ISignInResponse>(`${USER_URL}`, data);
  }
  signup(data: ISignUp) {
    return client.post<ISignUpResponse>(`users/`, data);
  }

  refresh() {
    return client.post<any>(`${USER_URL}refresh/`);
  }
}

export default Auth;
