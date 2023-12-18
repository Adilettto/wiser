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
  email: string;
};
export type signForgotParams = {
  data: ISignForgot;
  onSuccess: () => void;
};

export type signForgotResponse = {
  token: string;
  password: string;
};

export type ISignNewPassword = {
  email: string;
  password: string;
};
export type ISignNewPasswordParams = {
  data: ISignNewPassword;
  onSuccess: () => void;
};

export type ISignNewPasswordResponse = {
  email: string;
  token: string;
  password: string;
};
