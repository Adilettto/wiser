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
  password: string;
};
export type ISignUpResponse = {
  email: string;
  password: string;
};

export type SignUpParams = {
  data: ISignUp;
  onSuccess: () => void;
};
export type ISignForgot = {
  password: string;
};
