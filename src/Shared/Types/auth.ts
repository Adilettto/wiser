export type ISignIn = {
  email: string;
  password: string;
};

export type ISignInResponse = {
  access: string;
  refresh: string;
};

export type SignInParams = {
  data: ISignIn;
  onSuccess: () => void;
};

export type ISignUp = {
  email: string;
};
export type ISignForgot = {
  password: string;
};
