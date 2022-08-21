export interface ISignUp {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
  checkForm: boolean;
}

export interface ISignIn {
  password: string;
  email: string;
}
