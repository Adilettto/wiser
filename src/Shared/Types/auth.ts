export type ISignIn = {
  email: "string";
  password: "string";
};

export type ISignInResponse = {
  token: string;
  refresh: string;
};
