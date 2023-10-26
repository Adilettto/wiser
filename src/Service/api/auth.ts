import { client } from "Service/axios";

const USER_URL = "user/";
// write here your api

class Auth {
  signIn() {
    return client.post<any>(`${USER_URL}/sign-in`);
  }
  signUp() {
    return client.post<any>(`${USER_URL}/sign-up`);
  }
  forgetPassword() {
    return client.post<any>(`${USER_URL}/forget-password`);
  }
}

export default Auth;
