export type LoginDataType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  status: string;
  access_token: string;
};

export type APIResponseType = {
  status: string;
  message: string;
};

export type APIResponseTypeWithData<T> = {
  status: string;
  data: T;
};

export type RegisterDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordDataType = {
  email: string;
};

export type ResetPasswordDataType = {
  password: string;
  confirmPassword: string;
};

export type ChangePasswordDataType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type UserDataType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  photo: string;
};

export type MeResponseType = {
  status: string;
  user: UserDataType;
};
