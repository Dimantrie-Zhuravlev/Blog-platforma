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

export interface IEditProfile {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
}

export interface ICreateArticle {
  title: string;
  description: string;
  text: string;
  tags: string;
}
